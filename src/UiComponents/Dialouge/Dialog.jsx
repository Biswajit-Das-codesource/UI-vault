/* eslint-disable no-unused-vars */
// Dialog.jsx
import React, { useState, useContext, useEffect, createContext } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DialogContext = createContext();

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) throw new Error('useDialog must be used within a Dialog');
  return context;
}

export function Dialog({ children, ...props }) {
  const [isOpen, setIsOpen] = useState(props?.open ?? props?.defaultOpen ?? false);

  useEffect(() => {
    if (props?.open !== undefined) setIsOpen(props.open);
  }, [props?.open]);

  const handleOpenChange = (open) => {
    setIsOpen(open);
    props.onOpenChange?.(open);
  };

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      <DialogPrimitive.Root {...props} open={isOpen} onOpenChange={handleOpenChange}>
        {children}
      </DialogPrimitive.Root>
    </DialogContext.Provider>
  );
}

export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export function DialogOverlay(props) {
  return (
    <DialogPrimitive.Overlay asChild forceMount>
      <motion.div
        className="fixed inset-0 bg-black/80 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        {...props}
      />
    </DialogPrimitive.Overlay>
  );
}

export function DialogPortal({ children }) {
  return <DialogPrimitive.Portal forceMount>{children}</DialogPrimitive.Portal>;
}

export function DialogContent({ children, from = 'top', transition = { type: 'spring', stiffness: 150, damping: 25 }, className = '', ...props }) {
  const { isOpen, setIsOpen } = useDialog();
  const initialRotation = from === 'top' || from === 'left' ? '20deg' : '-20deg';
  const isVertical = from === 'top' || from === 'bottom';
  const rotateAxis = isVertical ? 'rotateX' : 'rotateY';

  return (
    <AnimatePresence>
      {isOpen && (
        <DialogPortal>
          <DialogOverlay />
          <DialogPrimitive.Content asChild forceMount {...props}>
            <motion.div
              className={`fixed z-50 left-1/2 top-1/2 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 p-6 bg-neutral-900 text-white rounded-xl shadow-xl ${className}`}
              initial={{
                opacity: 0,
                transform: `perspective(600px) ${rotateAxis}(${initialRotation}) scale(0.9)`,
              }}
              animate={{
                opacity: 1,
                transform: `perspective(600px) ${rotateAxis}(0deg) scale(1)`,
              }}
              exit={{
                opacity: 0,
                transform: `perspective(600px) ${rotateAxis}(${initialRotation}) scale(0.9)`,
              }}
              transition={transition}
            >
              {children}
              <DialogClose
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <X size={18} />
              </DialogClose>
            </motion.div>
          </DialogPrimitive.Content>
        </DialogPortal>
      )}
    </AnimatePresence>
  );
}

export function DialogHeader({ className = '', ...props }) {
  return <div className={`text-left space-y-1.5 ${className}`} {...props} />;
}

export function DialogFooter({ className = '', ...props }) {
  return <div className={`flex flex-col sm:flex-row justify-end gap-2 ${className}`} {...props} />;
}

export function DialogTitle({ className = '', ...props }) {
  return <DialogPrimitive.Title className={`text-xl font-semibold ${className}`} {...props} />;
}

export function DialogDescription({ className = '', ...props }) {
  return <DialogPrimitive.Description className={`text-sm text-neutral-400 ${className}`} {...props} />;
}

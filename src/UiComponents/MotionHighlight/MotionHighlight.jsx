/* eslint-disable no-unused-vars */
'use client';
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionHighlight = ({ items, hover = true }) => {
  const containerRef = useRef(null);
  const [highlight, setHighlight] = useState(null);
  
  const updateHighlight = (el) => {
    if (!el || !containerRef.current) return;
            {/*B.S*/}
    const rect = el.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    setHighlight({
      top: rect.top - containerRect.top,
      left: rect.left - containerRect.left,
      width: rect.width,
      height: rect.height,
    });
  };

  const clearHighlight = () => setHighlight(null);
  const handleActivate = (e) => {
    updateHighlight(e.currentTarget);
  };

  return (
    <div
      ref={containerRef}
      onMouseLeave={clearHighlight}
      className="relative w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6 bg-neutral-950 rounded-2xl overflow-hidden"
    >
      <AnimatePresence>
        {highlight && (
          <motion.div
            layout
            className="absolute z-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              top: highlight.top,
              left: highlight.left,
              width: highlight.width,
              height: highlight.height,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)', // silverish motion highlight
            }}
          />
        )}
      </AnimatePresence>

      {items.map((item, idx) => (
        <div
          key={idx}
          onMouseEnter={hover ? handleActivate : undefined}
          onClick={!hover ? handleActivate : undefined}
          className="relative z-10 p-5 rounded-xl bg-neutral-800/30 backdrop-blur-md transition-colors duration-300 cursor-pointer hover:bg-neutral-700/30"
        >
          <div className="mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
          <p className="text-sm text-neutral-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MotionHighlight;

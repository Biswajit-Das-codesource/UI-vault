import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CursorText({
  initialText = "Can You please Hover on me ?",
  hoverText = "You're Hovering 😎",
  cursorText = "Hello I am Biswajit 👋",
  cursorColor = "bg-white",
  textColor = "text-white",
  backgroundColor = "bg-black",
}) {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovered, setHovered] = useState(false);

  const cursorX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const cursorY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const [mainText, setMainText] = useState(initialText);

  useEffect(() => {
    const moveCursor = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", moveCursor);
    }

    return () => {
      if (container) container.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[60vh] ${backgroundColor} overflow-hidden flex items-center justify-center cursor-none`}
    >
      {/* Custom Cursor */}
      <motion.div
        className="absolute pointer-events-none z-50 flex items-center justify-center"
        style={{
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className={`rounded-full ${cursorColor} flex items-center justify-center text-black font-semibold`}
          animate={{
            width: hovered ? 170 : 12,
            height: hovered ? 170 : 12,
            x: hovered ? -60 : -6,
            y: hovered ? -60 : -6,
            opacity: hovered ? 1 : 0.15,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm pointer-events-none"
          >
            {cursorText}
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Center Text */}
      <div
        className={`${textColor} text-3xl font-bold z-10 transition-all duration-300`}
        onMouseEnter={() => {
          setHovered(true);
          setMainText(hoverText);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setMainText(initialText);
        }}
      >
        {mainText}
      </div>
    </div>
  );
}

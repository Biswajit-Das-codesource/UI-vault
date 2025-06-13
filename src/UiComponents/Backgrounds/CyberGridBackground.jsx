/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const rows = 8;
const cols = 12;

export default function CyberGridBackground() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 120 });

  const handleMouseMove = (e) => {
    const bounds = containerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const getRandomColor = () => {
    const colors = ["#0ff", "#f0f", "#0f0", "#ff0", "#f00", "#00f"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[60vh] md:h-[75vh] bg-[#0a0f1c] overflow-hidden rounded-xl"
    >
      {/* Grid of boxes */}
      <div className="absolute inset-0 grid gap-2 px-4 py-6" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {Array.from({ length: rows * cols }).map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;

          const delay = (row + col) * 0.05;

          return (
            <motion.div
              key={i}
              className="aspect-square w-full rounded-sm bg-[#23262e] group relative transition duration-300"
              initial={{ rotateX: 0, rotateY: 0 }}
              animate={{
                rotateX: [0, 10, 0],
                rotateY: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay,
              }}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              {/* Spark particles */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.span
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    backgroundColor: getRandomColor(),
                    opacity: 0.6,
                  }}
                  animate={{
                    scale: [0.5, 1.5, 0.5],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4 + Math.random() * 2,
                    ease: "easeInOut",
                    delay: Math.random() * 5,
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Center title (optional) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h2 className="text-cyan-400 text-3xl font-bold font-mono tracking-widest text-center">
          Cyber Grid
        </h2>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
    </div>
  );
}

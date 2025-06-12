import React from "react";
import { motion } from "framer-motion";

function CircularTextScroll({ text = "★ COMPONENTS * REACT * BITS *" }) {
  const characters = text.split("");
  const radius = 70; // Size of the circle in px

  return (
    <div className="w-full flex items-center justify-center py-10 bg-black">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 12,
        }}
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
      >
        {characters.map((char, index) => {
          const angle = (360 / characters.length) * index;
          const angleInRad = (angle * Math.PI) / 180;

          const x = radius + radius * Math.cos(angleInRad);
          const y = radius + radius * Math.sin(angleInRad);

          return (
            <span
              key={index}
              className="absolute text-white text-[18px] font-black uppercase tracking-widest"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                transformOrigin: "center",
              }}
            >
              {char}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

export default CircularTextScroll;

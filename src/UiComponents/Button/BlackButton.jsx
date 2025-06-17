import React from "react";
import { motion } from "framer-motion";

function GradientPink({ btnText = "Get Premium" }) {
  return (
    <div className="min-h p-8 bg-gray-950 flex items-center justify-center">
      <motion.button
        whileHover={{
          scale: 1.07,
          rotateX: 8,
          rotateY: -12,
          boxShadow: "0 15px 40px rgba(255, 0, 255, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        className="relative px-4 py-4 text-white font-semibold text-base bg-gradient-to-r from-pink-600 via-fuchsia-700 to-violet-600 rounded-full overflow-hidden group transform-gpu shadow-xl cursor-pointer"
      >
        <span className="z-10 relative">{btnText}</span>
        <span className="absolute inset-0 bg-white opacity-10 rounded-full splash-effect group-hover:animate-splash"></span>
      </motion.button>
    </div>
  );
}

export default GradientPink;

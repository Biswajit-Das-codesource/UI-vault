import React from "react";
import { motion } from "framer-motion";

function ShinnyText({ text = "✨ Shiny Text ✨" }) {
  return (
    <div className="min-h p-8 w-full flex items-center justify-center bg-gray-950">
      <div className="relative inline-block select-none">
        <motion.h2
          initial={{ backgroundPosition: "200% center" }}
          animate={{ backgroundPosition: "-200% center" }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-lg sm:text-lg font-semibold text-transparent bg-clip-text 
                     bg-gradient-to-r from-gray-800 via-white to-gray-800 
                     bg-[length:300%_100%] relative z-10"
        >
          {text}
        </motion.h2>
      </div>
    </div>
  );
}

export default ShinnyText;

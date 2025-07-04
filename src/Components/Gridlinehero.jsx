import React from "react";
import { motion } from "framer-motion";

const TOTAL_LINES = 14;
const lines = Array.from({ length: TOTAL_LINES });

const Gridlinehero = ({ text }) => {
  const defaultHeading = "What's cooler than Beams?";
  const defaultSubheading = "Exploding beams.";

  return (
    <div
      className="relative w-full h-[70vh] overflow-hidden bg-black text-white flex items-center justify-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Falling Lines */}
      {lines.map((_, i) => {
        const delay = Math.random() * 3;
        const left = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="absolute top-0 w-[1.5px] h-10 bg-violet-600 opacity-50 rounded-full"
            style={{ left: `${left}%` }}
            animate={{ y: "110vh" }}
            initial={{ y: "-10vh" }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
              delay,
            }}
          />
        );
      })}

      {/* Centered Text */}
      <div className="z-10 text-center px-4">
        {text ? (
          <h1 className="text-4xl md:text-6xl font-bold">{text}</h1>
        ) : (
          <>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">
              {defaultHeading}
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
              {defaultSubheading}
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default Gridlinehero;

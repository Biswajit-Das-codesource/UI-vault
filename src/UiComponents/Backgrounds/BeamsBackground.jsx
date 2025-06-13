import React from "react";
import { motion } from "framer-motion";

const BeamsBackground = () => {
  const beams = [
    {
      id: 1,
      color: "from-blue-500 to-transparent",
      top: "-20%",
      left: "-50%",
      rotate: "-45deg",
      delay: 0,
    },
    {
      id: 2,
      color: "from-purple-600 to-transparent",
      top: "10%",
      left: "-60%",
      rotate: "60deg",
      delay: 2,
    },
    {
      id: 3,
      color: "from-cyan-400 to-transparent",
      top: "30%",
      left: "-70%",
      rotate: "25deg",
      delay: 4,
    },
  ];

  return (
    <div className="relative w-full rounded-2xl min-h-150 bg-black overflow-hidden">
      {/* Background Beams */}
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className={`absolute w-[300vw] h-[300vh] bg-gradient-to-r ${beam.color} opacity-10 blur-2xl pointer-events-none`}
          style={{
            top: beam.top,
            left: beam.left,
            transform: `rotate(${beam.rotate})`,
          }}
          animate={{
            x: ["-20%", "20%", "-15%", "10%", "-10%"],
            y: ["-10%", "15%", "-5%", "20%", "-10%"],
            rotate: [beam.rotate, `${parseFloat(beam.rotate) + 5}deg`, beam.rotate],
          }}
          transition={{
            duration: 22,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: beam.delay,
          }}
        />
      ))}

      {/* Foreground Text */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Beams Background</h1>
        <p className="text-gray-400 mt-3 text-base md:text-lg">For your pleasure</p>
      </div>
    </div>
  );
};

export default BeamsBackground;

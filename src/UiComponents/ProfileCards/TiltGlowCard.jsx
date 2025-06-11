/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const TiltGlowCard = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);

  const glowX = useTransform(mouseX, (v) => `${v * 100}%`);
  const glowY = useTransform(mouseY, (v) => `${v * 100}%`);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div className="min-h bg-black flex items-center justify-center p-4">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative w-[340px] h-[440px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 cursor-pointer overflow-hidden"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute w-32 h-32 bg-purple-600/40 blur-2xl rounded-full"
            style={{
              left: glowX,
              top: glowY,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-white p-6 h-full justify-center">
          <img
            src="https://i.pinimg.com/736x/36/97/37/369737408e0047967fa989365ee899ec.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow-xl mb-4"
          />
          <h2 className="text-2xl font-bold">Biswabhusan Sahoo</h2>
          <p className="text-gray-400 text-sm mb-4">Frontend & Python</p>

          <div className="flex gap-3">
            <button className="bg-black border border-white text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
              Follow
            </button>
            <button className="bg-black border border-white text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
              Message
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TiltGlowCard;

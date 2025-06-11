import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";

const CyberFusion = () => {
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
        className="relative w-[380px] h-[500px] bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute w-32 h-32 bg-purple-600/40 blur-2xl rounded-full z-0"
          style={{
            left: glowX,
            top: glowY,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-28 relative z-10" />

        {/* Profile Image */}
        <div className="relative z-10 flex justify-center -mt-12">
          <img
            src="https://i.pinimg.com/736x/36/97/37/369737408e0047967fa989365ee899ec.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-black shadow-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-white text-center px-6 mt-3 relative z-10">
          <h2 className="text-xl font-bold">BISWAJIT DAS</h2>
          <p className="text-sm text-gray-400">@biswajitdas</p>
          <p className="mt-2 text-sm text-gray-300">
            Open Source enthusiast. Building things with React & Node.js 💻✨
          </p>

          {/* Stats */}
          <div className="flex justify-around mt-5 text-sm text-gray-300">
            <div>
              <span className="font-bold text-white block">120</span>
              Repos
            </div>
            <div>
              <span className="font-bold text-white block">3.4k</span>
              Followers
            </div>
            <div>
              <span className="font-bold text-white block">180</span>
              Following
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 justify-center">
            <button className="bg-black border border-white text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
              Follow
            </button>
            <button className="bg-black border border-white text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
              Sponsor
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CyberFusion;

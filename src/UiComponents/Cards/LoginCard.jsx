import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const TiltLoginCard = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);
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
    <div className="min-h bg-black flex items-center justify-center p-5">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative w-[360px] bg-gray-950 rounded-xl border border-[#2a2a2a] overflow-hidden shadow-lg transition-transform"
      >
        {/* Glowing cursor effect */}
        <motion.div
          className="absolute w-40 h-40 bg-violet-900/50 blur-2xl rounded-full pointer-events-none z-0"
          style={{
            left: glowX,
            top: glowY,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Login content */}
        <div className="relative z-10 p-7">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400 mb-6 text-sm">Login to continue</p>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-black border border-[#333] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500 outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-black border border-[#333] rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-pink-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-200 hover:bg-violet-400 text-black font-semibold rounded-lg transition"
            >
              Login
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default TiltLoginCard;

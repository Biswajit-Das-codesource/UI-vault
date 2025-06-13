/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";

const NeonTiltLoginCard = () => {
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
    <div className="relative min-h bg-black flex items-center justify-center px-4 overflow-hidden py-4">
      {/* Neon Pulse Background Glows */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-40 z-0"
        style={{ background: "radial-gradient(circle, #00ffff, transparent)" }}
        animate={{
          x: [-200, 200, -200],
          y: [-150, 150, -150],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[130px] opacity-30 z-0"
        style={{ background: "radial-gradient(circle, #ffff00, transparent)" }}
        animate={{
          x: [200, -200, 200],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Card with Effects */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="relative z-10 bg-gray-950 border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden"
      >
        {/* Interactive Glow Light */}
        <motion.div
          className="absolute w-40 h-40 bg-cyan-500/20 blur-2xl rounded-full pointer-events-none z-0"
          style={{
            left: glowX,
            top: glowY,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Mirror Shine */}
        <motion.div
          className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-3 z-20 pointer-events-none"
          animate={{ left: ["-75%", "125%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
        />

        {/* Actual Sign-Up Content (unchanged) */}
        <div className="relative z-30">
          <h2 className="text-3xl font-bold text-white mb-4">Create Account</h2>
          <p className="text-sm text-gray-400 mb-6">
            Sign up to get started with your fitness journey.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-xl bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-xl bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-xl bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center gap-2 mt-6 mb-2">
            <hr className="flex-grow border-gray-700" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl border border-white text-white hover:bg-white hover:text-black transition">
              <FaGoogle className="text-lg" />
              Sign Up with Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl border border-white text-white hover:bg-white hover:text-black transition">
              <FaGithub className="text-lg" />
              Sign Up with GitHub
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NeonTiltLoginCard;

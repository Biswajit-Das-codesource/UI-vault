


import React from "react";
import { Mail, Lock, Apple } from "lucide-react";
import { motion } from "framer-motion";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 533.5 544.3">
    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34.2-4-50.4H272v95.3h147.2c-6.4 34-25.2 62.8-53.7 82l86.6 67.2c50.4-46.5 81.4-115.2 81.4-194.1z" />
    <path fill="#34A853" d="M272 544.3c72.3 0 132.8-23.8 177.1-64.5l-86.6-67.2c-24 16.1-54.7 25.7-90.5 25.7-69.6 0-128.5-47-149.6-110.3H34.9v69.3c44.1 87.2 134.2 147 237.1 147z" />
    <path fill="#FBBC05" d="M122.4 327.9c-10.4-30.3-10.4-63.2 0-93.5v-69.3H34.9c-36.7 71.6-36.7 155.1 0 226.7l87.5-64z" />
    <path fill="#EA4335" d="M272 214.6c37.6 0 71.2 12.9 97.7 38.3l73.4-73.4C404.8 128.8 347.4 104 272 104 169.1 104 79 163.8 34.9 251l87.5 64c21.1-63.3 80-110.4 149.6-110.4z" />
  </svg>
);

const BorderBeam = () => (
  <motion.div
    className="absolute inset-0 rounded-2xl pointer-events-none z-0"
    initial={{ opacity: 1 }}
    animate={{ opacity: [0.7, 1, 0.7] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
  >
    <svg
      className="w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff00cc" />
          <stop offset="100%" stopColor="#3333ff" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.rect
        x="1"
        y="1"
        width="98"
        height="98"
        rx="5"
        ry="5"
        fill="none"
        stroke="url(#beamGradient)"
        strokeWidth="0.5"
        strokeDasharray="20 180"
        animate={{ strokeDashoffset: [0, -200] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
        filter="url(#glow)"
      />
    </svg>
  </motion.div>
);

const LoginForm = () => {
  return (
    <div className="min-h  bg-black flex items-center justify-center p-4">
      <div className="relative bg-black text-white rounded-2xl shadow-xl w-full max-w-sm p-6  border-neutral-800 overflow-hidden border">
        {/* Beams Border */}
        <BorderBeam />

        <form className="space-y-4 relative z-10">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <div className="flex items-center border border-gray-600 rounded-lg px-3 py-2 bg-[#1a1a1a]">
              <Mail className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <div className="flex items-center border border-gray-600 rounded-lg px-3 py-2 bg-[#1a1a1a]">
              <Lock className="text-gray-400 w-4 h-4 mr-2" />
              <input
                type="password"
                placeholder="Enter your Password"
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r text-black bg-white font-semibold py-2 rounded-xl hover:brightness-110 transition"
          >
            Sign In
          </button>

          <div className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </div>

          <div className="text-center mt-4 text-sm text-gray-400">Or With</div>

          <div className="flex gap-4 mt-2">
            <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-600 rounded-xl bg-[#1a1a1a] hover:bg-[#2a2a2a] transition">
              <GoogleIcon />
              <span className="text-sm font-medium">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-600 rounded-xl bg-[#1a1a1a] hover:bg-[#2a2a2a] transition">
              <Apple className="w-4 h-4" />
              <span className="text-sm font-medium">Apple</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

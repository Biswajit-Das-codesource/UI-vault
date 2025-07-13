import React from "react";
import { motion } from "framer-motion";

// 🔆 Static torchlight at top-left
const TorchLight = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0 rounded-2xl pointer-events-none"
      style={{
        background: `radial-gradient(
          500px at 0px 0px,
          rgba(255, 255, 255, 0.10),
          rgba(255, 255, 255, 0.01),
          transparent
        )`,
        borderRadius: "inherit",
      }}
    />
  );
};

// 🌈 Border beam animation
const BorderBeam = () => {
  return (
    <svg
      className="absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] z-10 pointer-events-none"
      viewBox="0 0 104 104"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9c40ff" />
          <stop offset="100%" stopColor="#ff69b4" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <motion.rect
        x="2"
        y="2"
        width="100"
        height="100"
        rx="8"
        ry="8"
        fill="none"
        stroke="url(#beamGradient)"
        strokeWidth="0.5"
        strokeDasharray="20 380"
        strokeDashoffset="0"
        filter="url(#glow)"
        animate={{
          strokeDashoffset: [0, -400],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      />
    </svg>
  );
};

export default function AnimateBgCard (){
  return (
    <div className="h-min w-full md:p-10 p-3 py-10 flex justify-center items-center"> 
    <div className="relative w-[350px] bg-black p-5 rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
      <TorchLight />
      <BorderBeam />
      <div className="relative z-20 space-y-4">


      <div>
        <h2 className="text-2xl font-bold text-white">Login</h2>
        <p className="text-sm text-gray-400">
          Enter your credentials to access your account
        </p>
    </div>
       <div className="border border-gray-800 w-full"></div>

        {/* Email Field */}
        <div className="">
          <label htmlFor="email" className="text-sm text-gray-300 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md text-sm bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <label
            htmlFor="password"
            className="text-sm text-gray-300 font-medium"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md text-sm bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
   
        <div className=" mt-5">
          <button className="bg-white w-full text-black font-semibold px-5 py-2.5 rounded-xl text-sm transition">
            Login
          </button>
        
         
        </div>
      </div>
    </div>
    </div>
  );
};
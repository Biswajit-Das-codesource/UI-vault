/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";

const FrostedGlassSignUpCard = () => {
  return (
    <div className="min-h bg-[#0a0a0a] flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.015 }}
        className="relative backdrop-blur-xl border border-white/10 bg-white/5 text-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2"
      >
        {/* Left Side - Info Panel */}
        <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-[#111] via-[#1f1f1f] to-[#111] border-r border-white/10">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-gray-400 text-sm">
            Sign up now and transform your fitness lifestyle with expert guidance and community support.
          </p>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="p-8 sm:p-10">
          <h3 className="text-2xl font-bold mb-1">Create Account</h3>
          <p className="text-gray-400 text-sm mb-6">Start your journey today.</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-[#1b1b1b] border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg bg-[#1b1b1b] border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-[#1b1b1b] border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center gap-2 my-6">
            <hr className="flex-grow border-gray-700" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white hover:text-black transition">
              <FaGoogle />
              Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white hover:text-black transition">
              <FaGithub />
              GitHub
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FrostedGlassSignUpCard;

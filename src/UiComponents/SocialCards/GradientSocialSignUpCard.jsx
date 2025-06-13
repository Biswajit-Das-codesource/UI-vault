/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";

const GradientSocialSignUpCard = () => {
  return (
    <div className="min-h bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden"
      >
        {/* Glow Gradient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20 -top-10 -left-10" />
          <div className="absolute w-72 h-72 bg-teal-400 rounded-full blur-[120px] opacity-20 -bottom-10 -right-10" />
        </div>

        <h2 className="text-3xl font-bold mb-2 z-10 relative">Create Your Account</h2>
        <p className="text-sm text-gray-300 mb-6 z-10 relative">
          Sign up with your email or use social accounts.
        </p>

        <form className="space-y-4 z-10 relative">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:brightness-110 font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center gap-2 my-6">
          <hr className="flex-grow border-gray-700" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 z-10 relative">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/10">
            <FaGoogle />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/10">
            <FaGithub />
            Continue with GitHub
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default GradientSocialSignUpCard;

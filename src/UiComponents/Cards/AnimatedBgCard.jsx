import React from "react";
import { motion } from "framer-motion";
import "../../App.css";

const AnimatedBgCard = ({
  headtext = "Login",
  desc = "Enter your credentials to access your account.",
  emailLabel = "Email",
  emailPlaceholder = "Enter your email",
  passwordLabel = "Password",
  passwordPlaceholder = "Enter your password",
  cancelText = "Cancel",
  loginText = "Login",
}) => {
  return (
    <div className="min-h flex items-center justify-center bg-black p-4 sm:p-8 relative overflow-hidden">
      {/* Animated Background Glows */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-40 z-0"
        style={{ background: "radial-gradient(circle, teal, transparent)" }}
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
        className="absolute w-[500px] h-[500px] rounded-full blur-[90px] opacity-30 z-0"
        style={{ background: "radial-gradient(circle, yellow, transparent)" }}
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

      {/* Card */}
      <div className="relative z-10 bg-black border-2 border-gray-800 rounded-2xl p-6 sm:p-8 w-full max-w-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden">
        <h2 className="text-3xl font-bold text-white mb-2">{headtext}</h2>
        <p className="text-gray-300 mb-6">{desc}</p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-2"
            >
              {emailLabel}
            </label>
            <input
              id="email"
              type="email"
              placeholder={emailPlaceholder}
              className="w-full px-4 py-2 rounded-xl bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              autoComplete="email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white font-semibold mb-2"
            >
              {passwordLabel}
            </label>
            <input
              id="password"
              type="password"
              placeholder={passwordPlaceholder}
              className="w-full px-4 py-2 rounded-xl bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              autoComplete="current-password"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-black border border-white text-white hover:bg-white hover:text-black transition"
            >
              {cancelText}
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              {loginText}
            </button>
          </div>
        </form>

        {/* Mirror Shine Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20"
          initial={{ x: "-150%", y: "-150%", rotate: 45 }}
          animate={{ x: "150%", y: "150%" }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-transparent via-violet-400/30 to-transparent blur-sm opacity-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedBgCard;

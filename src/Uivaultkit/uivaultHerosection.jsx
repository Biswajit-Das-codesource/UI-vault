import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { PiMagicWandBold } from "react-icons/pi";
import { motion } from "framer-motion";

export default function UivaultKitHeroSection() {
  return (
    <section className="bg-black text-white min-h-screen w-full px-4 sm:py-5 py-5 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-6xl flex flex-wrap items-center justify-between px-2 sm:px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-bold bg-gradient-to-r from-slate-100 via-[#C0C0C0] to-slate-200 text-transparent bg-clip-text"
        >
          UIvault.in
        </motion.h1>

        <nav className="hidden md:flex gap-6 font-medium text-sm">
          {/* <a href="#">Blocks</a>
          <a href="#">Templates</a> */}
        </nav>
      </header>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 px-4 text-center space-y-2"
      >
        <div className="inline-flex items-center gap-2 border border-gray-700 rounded-full px-3 py-1 text-sm">
          <span>Introducing Uivault</span>
          <span className="text-gray-400">Special</span>
          <button className="text-blue-400 text-xs font-medium">Kit →</button>
        </div>

        {/* Hero Title */}

        <motion.h1
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-6"
        >
          The ultimate block set for <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            UIvault & Tailwind
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="mt-4 text-gray-300 max-w-2xl mx-auto text-base sm:text-base"
        >
          Explore premium, handcrafted UI blocks and components made for
          UIVault, Tailwind, and React—built by our team, not AI. Fully
          responsive, interactive, and ready to drop into your project. Build
          faster with design you can trust.
        </motion.p>
        {/* Waitlist Input */}
        <form
          action="https://formspree.io/f/xblyvgna" // replace with your actual Formspree endpoint
          method="POST"
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email for the waitlist"
            className="border border-gray-600 bg-black text-white px-4 py-3 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="bg-white text-black px-5 py-2 rounded-md font-medium text-sm w-full sm:w-auto"
          >
            Join Waitlist
          </button>
        </form>

        {/* Icons */}
        <div className="mt-10 flex flex-wrap gap-6 justify-center items-center text-3xl">
          <PiMagicWandBold className="text-white" />
          <SiTailwindcss className="text-cyan-400" />
          <FaReact className="text-blue-400" />
          <TbBrandNextjs className="text-white" />
          <BsStars className="text-white" />
        </div>
      </motion.div>
    </section>
  );
}

import React from "react";
import {
  FaPaperPlane,
  FaSearch,
  FaClipboard,
  FaLanguage,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Aichat = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-end pb-10 items-center overflow-hidden bg-black">
      {/* Subtle Gradient Lighting Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "radial-gradient(at top left, rgba(147, 51, 234, 0.2), transparent 70%), radial-gradient(at bottom right, rgba(20, 184, 166, 0.2), transparent 70%)",
          backgroundSize: "200% 200%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 px-4 text-white w-full">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Welcome to WebbyUI
          </h1>
          <p className="text-gray-200 text-lg">What can I do for you today?</p>
        </div>

        {/* Input Card */}
        <div className="w-full max-w-2xl mx-auto mt-10">
          <div className="flex items-center bg-black/60 backdrop-blur-md rounded-xl px-4 py-3 shadow-md">
            <input
              type="text"
              placeholder="What would you like to do?"
              className="flex-grow bg-transparent text-gray-200 focus:outline-none placeholder:text-gray-400"
            />
            <button className="text-gray-300 hover:text-white transition">
              <FaPaperPlane size={18} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <button className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-6 py-2 rounded-xl hover:bg-black/70 transition text-sm text-white">
              <FaSearch /> Search the web
            </button>
            <button className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-6 py-2 rounded-xl hover:bg-black/70 transition text-sm text-white">
              <FaClipboard /> Summarize this article
            </button>
            <button className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-6 py-2 rounded-xl hover:bg-black/70 transition text-sm text-white">
              <FaLanguage /> Translate this text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aichat;

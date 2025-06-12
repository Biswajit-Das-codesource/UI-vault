/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRetweet, FaRegCommentDots, FaShare } from "react-icons/fa";

const ModernTweetCard = () => {
  const profileImage =
    "https://i.pinimg.com/736x/36/97/37/369737408e0047967fa989365ee899ec.jpg";

  const tweetImage =
    "https://framerusercontent.com/images/PW7TZzsRuEq5sLfu3FYVeD6Kcg.png?scale-down-to=2048"; 

  return (
    <div className="min-h bg-black text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.015, boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)" }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-gray-800 text-white rounded-2xl p-5 max-w-md w-full shadow-lg backdrop-blur-md"
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-3">
          <img
            src={profileImage}
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-cyan-400"
          />
          <div>
            <h2 className="font-semibold text-lg">Biswabhusan Sahoo</h2>
            <p className="text-gray-400 text-sm">@biswabhusan.dev • 2h</p>
          </div>
        </div>

        {/* Tweet content */}
        <p className="text-sm text-gray-200 mb-4">
          Just finished building a futuristic profile card using{" "}
          <span className="text-cyan-400">Framer Motion</span> and{" "}
          <span className="text-pink-400">Tailwind CSS</span>! 🚀 <br />
          Loving the dark theme vibes 💻✨
        </p>

        {/* Tweet image */}
        <motion.div
          className="w-full h-48 bg-gray-800 rounded-xl mb-4 overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={tweetImage}
            alt="Tweet visual"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Actions */}
        <div className="flex justify-between items-center text-gray-400 text-sm">
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="flex items-center gap-1 hover:text-cyan-400 transition"
          >
            <FaRegCommentDots /> 24
          </motion.button>
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="flex items-center gap-1 hover:text-green-400 transition"
          >
            <FaRetweet /> 8
          </motion.button>
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="flex items-center gap-1 hover:text-pink-400 transition"
          >
            <FaHeart /> 152
          </motion.button>
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="flex items-center gap-1 hover:text-white transition"
          >
            <FaShare />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ModernTweetCard;

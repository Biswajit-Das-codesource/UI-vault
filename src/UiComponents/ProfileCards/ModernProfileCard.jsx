import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaCodeBranch, FaTimes } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const ModernProfileCard = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const profileImage =
    "https://i.pinimg.com/736x/36/97/37/369737408e0047967fa989365ee899ec.jpg";

  return (
    <div className="min-h bg-black text-white flex items-center justify-center p-6">
      <motion.div
        className="relative w-full max-w-sm bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-cyan-500 shadow-neon cursor-pointer"
          onClick={() => setIsPreviewOpen(true)}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <div className="text-center">
          <h2 className="text-xl font-bold tracking-wide">Biswabhusan Sahoo</h2>
          <p className="text-sm text-gray-400">Python Developer</p>
          <p className="text-cyan-400 mt-1 animate-pulse">🟢 Available for Hire</p>
        </div>

        <div className="mt-6 space-y-2">
          {["Web 3.0", "AI Tools", "React Dev"].map((skill) => (
            <motion.div
              key={skill}
              className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-sm text-white flex items-center gap-2">
                <FaCodeBranch /> {skill}
              </span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                <span className="w-2 h-2 bg-cyan-300 rounded-full" />
                <span className="w-2 h-2 bg-cyan-100 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <button className="flex-1 bg-cyan-400 text-black px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition flex items-center justify-center gap-1">
            <HiOutlineExternalLink /> Portfolio
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg text-white hover:bg-gray-600 transition flex items-center gap-1">
            <FiShare2 /> Share
          </button>
        </div>
      </motion.div>

      {isPreviewOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative max-w-3xl w-[90%]">
            <img
              src={profileImage}
              alt="Preview"
              className="w-full rounded-2xl border-4 border-white shadow-xl"
            />
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-2 hover:bg-black"
            >
              <FaTimes />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ModernProfileCard;

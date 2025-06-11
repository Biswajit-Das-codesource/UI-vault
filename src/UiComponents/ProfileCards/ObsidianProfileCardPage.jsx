import React, { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { HiOutlineExternalLink, HiX, HiMinus } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function ObsidianProfileCardPage() {
  const [previewSrc, setPreviewSrc] = useState(null);
  const profileImage = "https://i.pinimg.com/736x/36/97/37/369737408e0047967fa989365ee899ec.jpg";

  const handleImageClick = () => setPreviewSrc(profileImage);
  const closePreview = () => setPreviewSrc(null);

  return (
    <div className="min-h bg-[#0e0e10] text-white flex items-center justify-center p-4">
      <div className="bg-[#1a1a1d] p-6 rounded-2xl shadow-lg w-full max-w-sm">
        <div className="flex items-center gap-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-16 h-16 rounded-full cursor-pointer object-cover border border-gray-600"
            onClick={handleImageClick}
          />
          <div>
            <h2 className="text-lg font-semibold">Biswajit Das</h2>
            <p className="text-sm text-gray-400">Fullstack Developer</p>
            <p className="text-green-400 text-sm">🟢 Open to Work</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {["Frontend", "Backend", "DevOps"].map((skill) => (
            <div
              key={skill}
              className="bg-[#2a2a2e] px-4 py-2 rounded-lg flex justify-between items-center"
            >
              <span className="flex items-center gap-2 text-sm">
                <FaCode /> {skill}
              </span>
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-white rounded-full" />
                <span className="w-2 h-2 bg-white/50 rounded-full" />
                <span className="w-2 h-2 bg-white/30 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-4">
          <button className="flex-1 bg-white text-black py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1">
            <HiOutlineExternalLink /> View Portfolio
          </button>
          <button className="bg-[#2a2a2e] px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-[#3a3a3e]">
            <FiShare2 /> Share
          </button>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewSrc && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closePreview}
        >
          <div
            className="relative max-w-[90%] max-h-[80%]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewSrc}
              alt="Profile Preview"
              className="rounded-xl border-4 border-white shadow-xl max-h-[80vh]"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                className="bg-white text-black p-1 rounded-full"
                onClick={() => setPreviewSrc(null)}
              >
                <HiX size={18} />
              </button>
              <button
                className="bg-white text-black p-1 rounded-full"
                onClick={() => setPreviewSrc(null)}
              >
                <HiMinus size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ObsidianProfileCardPage;
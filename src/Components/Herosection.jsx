import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiShare2 } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import "../App.css";

const Herosection = () => {
  const [previewSrc, setPreviewSrc] = useState(null);

  const handleImageClick = (src) => setPreviewSrc(src);
  const closePreview = () => setPreviewSrc(null);

  const profileImage =
    "https://i.pinimg.com/736x/36/97/37/369737408e0047967fa989365ee899ec.jpg";

  return (
    <>
      <div className="bg-black text-white min-h-[100vh] px-4 py-3 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <motion.div
          className="flex-1 flex flex-col justify-center md:ml-4"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Craft with{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              precision
            </span>
            ,<br />
            build with{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              ease
            </span>
            .
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl">
            A curated collection of{" "}
            <span className="font-bold text-white">
              100+ premium UI components
            </span>
            <br />
            crafted with <span className="text-pink-400">Tailwind CSS</span> and{" "}
            <span className="text-purple-300">shadcn/ui</span> for modern React
            and Next.js applications.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-gray-800 text-cyan-300 text-sm px-3 py-1 rounded-full">
              ~ Now updated for Tailwind CSS 4.0!
            </span>
            <span className="bg-purple-700/30 text-purple-300 text-sm px-3 py-1 rounded-full">
              🌟 New
            </span>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="relative bg-white bg-gradient-to-r from-pink-400 to-purple-500 text-black px-6 py-3 rounded-xl text-base font-semibold transition transform hover:scale-105 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:blur-xl before:opacity-100 before:transition-all before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 cursor-pointer flex items-center gap-2">
              Browse Components <FiArrowRight />
            </button>

            <button className="bg-gray-950 border border-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-black transition cursor-pointer flex items-center gap-2">
              Go to Templates <FiArrowRight />
            </button>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full lg:w-[420px] space-y-6 md:mr-5"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          {/* Card 1 */}
          <motion.div
            className="relative rounded-xl overflow-hidden bg-gradient-to-br from-pink-500 to-purple-800 p-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=400&q=80"
              alt="New UI"
              className="rounded-xl object-cover h-52 w-full mix-blend-hard-light cursor-pointer"
              onClick={() =>
                handleImageClick(
                  "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=800&q=90"
                )
              }
            />
            <span className="absolute top-2 right-2 bg-black/50 px-2 py-1 text-xs rounded-full">
              New
            </span>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-bold text-white text-lg">
                New UI Design Fundamentals
              </h3>
              <p className="text-sm text-gray-200">
                Explore the fundamentals of contemporary UI design
              </p>
              <HiOutlineExternalLink className="text-white text-lg mt-1" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-gray-950 shadow-lg shadow-gray-800 rounded-xl p-6 space-y-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-12 bg-gray-400 rounded-full flex items-center justify-center text-black font-bold cursor-pointer"
                onClick={() => handleImageClick(profileImage)}
              >
                <img
                  src={profileImage}
                  className="rounded-full h-16 w-24 object-cover"
                  alt="Profile"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">John Doe</h4>
                <p className="text-sm text-gray-400">Senior Developer</p>
                <div className="text-green-400 text-sm">🟢 Open to Work</div>
              </div>
            </div>

            <div className="space-y-2">
              {["Frontend", "Backend", "DevOps"].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-800 rounded-lg px-4 py-2 flex justify-between items-center"
                >
                  <span className="text-sm text-white flex items-center gap-2">
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

            <div className="flex gap-4 mt-2">
              <button className="flex-1 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition flex items-center justify-center gap-1">
                <HiOutlineExternalLink /> View Portfolio
              </button>
              <button className="bg-gray-800 px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition flex items-center gap-1">
                <FiShare2 /> Share
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Preview Modal */}
      {previewSrc && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closePreview}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img
            src={previewSrc}
            alt="Preview"
            className="max-w-[90%] max-h-[80%] rounded-xl border-4 border-white shadow-xl"
          />
        </motion.div>
      )}
    </>
  );
};

export default Herosection;

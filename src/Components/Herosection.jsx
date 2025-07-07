import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { SiFramer, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { Link } from "react-router";
import image from "../assets/image.png";

const Herosection = () => {
  const [previewSrc, setPreviewSrc] = useState(null);
  const handleImageClick = (src) => setPreviewSrc(src);
  const closePreview = () => setPreviewSrc(null);

  const floatingVariants = {
    float: {
      y: [10, 95, 0, 60, 10],
      x: [10, 10, -10, 10, 0],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Floating Glowing Bulb - Left */}
      {/* <motion.div
        className="fixed top-20 left-14 z-[9999] pointer-events-none"
        variants={floatingVariants}
        animate="float"
      >
        <div className="w-60 h-40 bg-violet-700 rounded-full blur-3xl opacity-60 shadow-[0_0_40px_#fde047]" />
      </motion.div> */}

      {/* Hero Section */}
      <div className="relative z-10 bg-black text-white min-h-[90vh] px-4 py-2 flex flex-col lg:flex-row gap-8 overflow-hidden">
        {/* Left Section */}
        <motion.div
          className="flex-1 flex flex-col justify-center md:ml-4 md:mt-0 mt-4"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-5xl font-extrabold leading-tight mt-8 sm:mt-1 text-white"
          >
            Design{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
              clarity
            </span>
            ,<br />
            develop{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              confidence
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="mt-4 text-base sm:text-base text-gray-300 max-w-2xl"
          >
            Elevate your UI game with{" "}
            <span className="font-bold text-white">
              20+ Animated components
            </span>
            ,
            <br />
            styled using <span className="text-pink-400">Tailwind</span> and
            powered by <span className="text-purple-300">Framer Motion</span>
            <br /> — built for fast, beautiful React apps.
          </motion.p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-gray-800 text-cyan-300 text-sm px-3 py-1 rounded-full">
              ~ Now updated for Tailwind CSS 4.0!
            </span>
            <span className="bg-purple-700/30 text-purple-300 text-sm px-3 py-1 rounded-full">
              🌟 New
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start px-6 md:px-0 md:mt-8"
          >
            <Link to="/components/Lens" className="w-full sm:w-auto">
              <button className="relative w-full sm:w-auto bg-white bg-gradient-to-r from-pink-400 to-purple-500 text-black px-3 py-3 rounded-xl text-sm font-semibold transition transform hover:scale-105 before:absolute before:inset-0 before:-z-10 before:rounded-xl before:blur-xl before:opacity-100 before:transition-all before:bg-gradient-to-r before:from-pink-500 before:to-purple-500 cursor-pointer flex items-center justify-center gap-2">
                Browse Components <FiArrowRight />
              </button>
            </Link>

            <button className="w-full sm:w-auto bg-gray-950 border border-white px-4 py-3 rounded-xl text-sm font-semibold hover:bg-black transition cursor-pointer flex items-center justify-center gap-2">
              Go to Projects
              <FiArrowRight />
            </button>
          </motion.div>

          <h3 className="text-gray-400 font-medium mt-4 text-lg sm:text-left text-center md:text-left">
            Built with
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            className="mt-5 flex justify-center sm:justify-start items-center gap-6 text-white text-3xl"
          >
            <div className="flex items-center gap-2">
              <SiTailwindcss className="text-cyan-400" />
              <span className="text-base text-gray-300">Tailwind</span>
            </div>
            <div className="flex items-center gap-2">
              <FaReact className="text-blue-400 animate-spin-slow" />
              <span className="text-base text-gray-300">React</span>
            </div>
            <div className="flex items-center gap-2">
              <SiFramer className="text-pink-500" />
              <span className="text-base text-gray-300">Framer</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Card Section (Responsive) */}
        <motion.div
          className="w-full lg:w-1/2 min-h-[300px] lg:min-h-screen flex items-center justify-center lg:justify-end relative lg:absolute right-0 pt-6 lg:pt-10 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative max-w-[90%] max-h-[80%] overflow-hidden group [perspective:1300px] rounded-2xl">
            <div className="absolute inset-0 z-0 rounded-[20px] bg-fuchsia-600 opacity-20 blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div
                className="w-[60%] h-[10%] rounded-full bg-purple-100"
                style={{ animation: "pingLoop 3s infinite ease-in-out" }}
              />
            </div>
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[20px] h-full bg-gradient-to-b from-white/0 via-pink-600 to-white/0 opacity-20 z-10"
              style={{ animation: "shimmer 3s ease-in-out infinite" }}
            />
            <div className="p-[6px_0px_0px_6px] rounded-[20px] relative z-10">
              <motion.div
                className="relative z-20 bg-black/50 backdrop-blur-md p-4 rounded-[16px] transition-transform duration-300 group-hover:rotate-x-6 group-hover:rotate-y-6"
                animate={{
                  boxShadow: [
                    "0 0 15px #8b5cf6, 0 0 25px #ec4899, 0 0 35px #3b82f6, 0 0 45px #8b5cf6",
                    "0 0 25px #8b5cf6, 0 0 35px #ec4899, 0 0 45px #3b82f6, 0 0 55px #ec4899",
                    "0 0 35px #3b82f6, 0 0 45px #8b5cf6, 0 0 55px #ec4899, 0 0 65px #3b82f6",
                    "0 0 25px #8b5cf6, 0 0 35px #ec4899, 0 0 45px #3b82f6, 0 0 55px #8b5cf6",
                  ],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/10 via-white/70 to-white/10 z-30"
                  style={{ animation: "scanLine 2s linear infinite" }}
                />
                <div className="relative w-full h-full">
                  <img
                    src={image}
                    alt="Cyber Card"
                    className="rounded-[12px] object-contain w-full h-full"
                  />
                  <div
                    className="absolute bottom-0 left-0 w-full h-[30%] z-10 rounded-b-[12px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to top, black, transparent)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
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

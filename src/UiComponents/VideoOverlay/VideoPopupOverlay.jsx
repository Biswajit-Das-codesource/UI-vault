/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function VideoPopupOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background image with play button */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full max-w-4xl h-[60vh] rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          backgroundImage: `url('https://wallpapercat.com/w/full/1/d/e/2057212-1920x1080-desktop-full-hd-we-bare-bears-the-movie-wallpaper-photo.jpg')`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Pulse button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1], boxShadow: [
            "0 0 0px rgba(0,255,255,0.3)",
            "0 0 20px rgba(0,255,255,0.8)",
            "0 0 0px rgba(0,255,255,0.3)"
          ] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.button
            whileHover={{ scale: 1.3, boxShadow: "0 0 25px 8px rgba(0,255,255,0.8)" }}
            className="bg-black backdrop-blur-md p-4 rounded-full border border-cyan-300 shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              className="w-10 h-10"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Overlay Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 w-10 h-10 text-white text-2xl bg-black/60 rounded-full hover:bg-black/80"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

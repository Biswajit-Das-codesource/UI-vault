/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  { id: 1, content: "1" },
  { id: 2, content: "2" },
  { id: 3, content: "3" },
  { id: 4, content: "4" },
  { id: 5, content: "5" },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
};

const swipeConfidenceThreshold = 100; // Distance needed to trigger swipe
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const DarkCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([
      (page + newDirection + slides.length) % slides.length,
      newDirection,
    ]);
  };

  return (
    <div className="min-h bg-black flex items-center justify-center p-6">
      <div className="relative w-full max-w-sm h-110 rounded-2xl bg-[#000000] overflow-hidden flex items-center justify-center shadow-md border-2 border-gray-700">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slides[page].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1); // Swipe left
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1); // Swipe right
              }
            }}
            className="text-white text-5xl bg-[#1f1f1f] rounded-2xl font-bold w-full h-full flex items-center justify-center  cursor-grab active:cursor-grabbing"
          >
            {slides[page].content}
          </motion.div>
        </AnimatePresence>

        {/* Left Arrow */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-gray-800 text-white p-2 rounded-full border border-gray-700"
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-gray-800 text-white p-2 rounded-full border border-gray-700"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DarkCarousel;

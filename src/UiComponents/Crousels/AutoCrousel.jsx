/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const items = [
  { id: 1, content: "Slide 1" },
  { id: 2, content: "Slide 2" },
  { id: 3, content: "Slide 3" },
  { id: 4, content: "Slide 4" },
  { id: 5, content: "Slide 5" },
];

const variants = {
  enter: (direction) => ({
    opacity: 0,
    scale: 0.9,
    rotate: direction > 0 ? -10 : 10,
    x: direction > 0 ? 100 : -100,
    position: "absolute",
  }),
  center: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    position: "relative",
  },
  exit: (direction) => ({
    opacity: 0,
    scale: 0.9,
    rotate: direction > 0 ? 10 : -10,
    x: direction > 0 ? -100 : 100,
    position: "absolute",
  }),
};

const AutoCarousel = () => {
  const [[index, direction], setIndex] = useState([0, 0]);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setIndex(([prev]) => [
      (prev + 1) % items.length,
      1
    ]);
  };

  const prevSlide = () => {
    setIndex(([prev]) => [
      (prev - 1 + items.length) % items.length,
      -1
    ]);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="min-h flex items-center justify-center bg-black p-4">
      <div className="relative w-full max-w-lg h-90 rounded-2xl bg-[#111] overflow-hidden border border-gray-800 shadow-xl flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={items[index].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 250, damping: 30 },
              opacity: { duration: 0.3 },
              rotate: { type: "spring", stiffness: 100 },
            }}
            className="text-white text-4xl font-semibold w-full h-full flex items-center bg-[#1f1f1f] rounded-2xl justify-center"
          >
            {items[index].content}
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-gray-800 text-white p-2 rounded-full border border-gray-700"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1a1a1a] hover:bg-gray-800 text-white p-2 rounded-full border border-gray-700"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AutoCarousel;

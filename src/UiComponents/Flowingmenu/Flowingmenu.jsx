import React from "react";
import { motion } from "framer-motion";

const items = [
  { name: "MOJAVE", img: "/images/mountain.jpg" },
  { name: "SONOMA", img: "/images/mountain.jpg" },
  { name: "MONTEREY", img: "/images/mountain.jpg" },
  { name: "SEQUOIA", img: "/images/mountain.jpg" },
];

// Duplicate items to create seamless scroll
const scrollingItems = [...items, ...items];

export default function Flowingmenu() {
  return (
    <div className="relative w-full bg-white overflow-hidden py-6">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
      >
        {scrollingItems.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ backgroundColor: "#ffffff", borderColor: "#000000" }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-full bg-black text-white flex items-center justify-center px-6 py-2 cursor-pointer border border-transparent"
            style={{ minWidth: "180px", height: "60px" }}
          >
            {/* Hover fade-in background image */}
            <motion.img
              src={item.img}
              alt={item.name}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full z-0"
            />

            {/* Infinite scrolling text inside pill (optional) */}
            <div className="overflow-hidden w-full z-10">
              <motion.div
                className="whitespace-nowrap text-center font-semibold text-lg text-black relative"
                animate={{ x: ["0%", "-33%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 4,
                  ease: "linear",
                }}
              >
                {item.name}&nbsp;&nbsp;{item.name}&nbsp;&nbsp;{item.name}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        }}
      >
        {scrollingItems.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ backgroundColor: "#ffffff", borderColor: "#000000" }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-full bg-black text-white flex items-center justify-center px-6 py-2 cursor-pointer border border-transparent"
            style={{ minWidth: "180px", height: "60px" }}
          >
            {/* Hover fade-in background image */}
            <motion.img
              src={item.img}
              alt={item.name}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-full z-0"
            />

            {/* Infinite scrolling text inside pill (optional) */}
            <div className="overflow-hidden w-full z-10">
              <motion.div
                className="whitespace-nowrap text-center font-semibold text-lg text-black relative"
                animate={{ x: ["0%", "-33%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 4,
                  ease: "linear",
                }}
              >
                {item.name}&nbsp;&nbsp;{item.name}&nbsp;&nbsp;{item.name}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

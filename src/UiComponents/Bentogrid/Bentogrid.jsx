import React from "react";
import { motion } from "framer-motion";
import { FileText, Layout, MessageSquare, BookOpen } from "lucide-react";

// Updated items with `image` field
const bentoItems = [
  {
    icon: <FileText size={20} />,
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    image: "https://i.pinimg.com/1200x/c9/5c/e4/c95ce46466d1c54c7a3c28339c95933d.jpg",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    icon: <FileText size={20} />,
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    image: "https://i.pinimg.com/736x/8b/63/81/8b63819628ad916857bf840d6ac59aa6.jpg",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    icon: <Layout size={20} />,
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    image: "https://i.pinimg.com/736x/00/dd/de/00ddde44b25cbd25fae5e7899e7d3cc0.jpg",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    icon: <MessageSquare size={20} />,
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    image: "https://t3.ftcdn.net/jpg/03/48/91/92/360_F_348919233_S2C1VQ5xbJQCzIDkSJ20lBHQiLX9DYvW.jpg",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    icon: <BookOpen size={20} />,
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    image: "https://i.pinimg.com/474x/e3/98/7f/e3987f3986324a5a1975d31de3e328b4.jpg",
    span: "lg:col-span-1 lg:row-span-1",
  },
];

const BentoGrid = () => {
  return (
    <div className="bg-black min-h-screen p-6 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 max-w-7xl mx-auto">
        {bentoItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md flex flex-col ${item.span}`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 sm:h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <div className="text-white mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-white/80 mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;

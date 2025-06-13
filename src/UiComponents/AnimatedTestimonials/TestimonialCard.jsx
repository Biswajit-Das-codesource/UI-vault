import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Biswajit Das",
    title: "CTO at InnovateSphere",
    text: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    image: "https://i.pinimg.com/736x/71/4a/76/714a769c3a156d159053b1210dad3b6b.jpg",
  },
  {
    name: "Biswabhusana sahoo",
    title: "Product Lead at Creatix",
    text: "The UI Vault component library saved us weeks of development. Love the flexibility and animation!",
    image: "https://i.pinimg.com/736x/7a/f2/91/7af291a50ea019aaa0fc2b1983d4d007.jpg",
  },
  {
    name: "Supriyan & Subhranshu",
    title: "CEO at CodersCore",
    text: "Everything just works out of the box. It’s like having a designer and developer in one tool.",
    image: "https://i.pinimg.com/736x/e2/0c/89/e20c89566ea7dff8c174040707dc2e51.jpg",
  },
];

export default function TestimonialCard() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white p-8 md:p-16 gap-10">
      {/* Left Section */}
      <div className="relative w-[300px] h-[360px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={testimonials[index].image}
            src={testimonials[index].image}
            alt="testimonial"
            className="rounded-3xl object-cover w-full h-full z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Right Section */}
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-1">{testimonials[index].name}</h2>
        <p className="text-gray-400 mb-4">{testimonials[index].title}</p>
        <p className="text-lg mb-6 leading-relaxed">{testimonials[index].text}</p>

        <div className="flex gap-4">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-[#222] hover:bg-[#333] transition"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full bg-[#222] hover:bg-[#333] transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import template1 from "../assets/template1.png";
import template2 from "../assets/tamplate2.png";
import template3 from "../assets/tamplate3.png";

const cards = [
  {
    title: "Persite",
    url: "https://www.persite.com",
    description: "Your SEO ready personal website + blog in 10min",
    image: template1,
  },
  {
    title: "Smigli",
    url: "https://www.smigli.com",
    description: "Solve The Data Entry & Organization Problem With Smigli",
    image: template2,
  },
  {
    title: "Another Project",
    url: "#",
    description: "Something cool goes here.",
    image: template3,
  },
];

export default function Templatehero() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * index,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <section className="bg-black min-h-[70vh] text-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Recently built with Launch UI
      </h1>
      <p className="text-gray-400 mb-10 text-center max-w-xl">
        Dozens of designers and developers have already built their websites with Launch UI.
      </p>

      <div
        ref={containerRef}
        className="w-full max-w-5xl overflow-hidden relative"
      >
        <div className="flex transition-all duration-700 ease-out w-full">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="w-full flex-shrink-0"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-b from-violet-600 to-pink-500 rounded-xl shadow-xl h-[70vh] flex flex-col overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-2/3 object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-screen">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
                    <p className="text-white text-sm">{card.description}</p>
                  </div>
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-white text-black text-sm px-4 py-2 rounded-md w-fit hover:bg-opacity-80"
                  >
                    View Template →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

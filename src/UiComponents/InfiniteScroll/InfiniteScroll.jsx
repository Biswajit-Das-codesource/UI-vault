import { motion } from "framer-motion";
import React from "react";

const cards = [
  {
    id: 1,
    name: "Biswajit Das",
    handle: "@biswajit",
    text: "Code. Debug. Repeat. Building UI Vault and beyond!",
    image: "https://i.pinimg.com/1200x/51/e6/ea/51e6eaf83230932299d801f04d0d15c2.jpg", // Replace with actual image
  },
  {
    id: 2,
    name: "Biswabhusana",
    handle: "@biswabhusana",
    text: "Crafting digital wonders, one line of code at a time.",
    image: "https://images4.alphacoders.com/133/1337222.jpeg",
  },
  {
    id: 3,
    name: "Subhalaxmi Dalei",
    handle: "@subhalaxmi",
    text: "Designing with purpose, developing with passion.",
    image: "https://i.pinimg.com/736x/a6/6b/ba/a66bba8c751a4899ee7898af27258082.jpg",
  },
  {
    id: 4,
    name: "Supriyan Das",
    handle: "@supriyan",
    text: "Pushing pixels and ideas forward every single day.",
    image: "https://pbs.twimg.com/media/D5ftv_8UEAEwDrw.jpg",
  },
  {
    id: 5,
    name: "Subhranshu ",
    handle: "@subhranshu",
    text: "Turning coffee into scalable solutions and features.",
    image: "https://cdn6.aptoide.com/imgs/3/7/c/37cb91da8019d4dec9314fbce20f5c68_screen.jpg",
  },
];

export default function InfiniteScrollCards() {
  return (
    <div className="min-h bg-black flex flex-col gap-12 justify-center items-center px-4 py-16">
      {/* Row 1 (scroll left) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black z-10 pointer-events-none" />
        <motion.div
          className="flex whitespace-nowrap min-w-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", ease: "linear", duration: 30 }}
        >
          {[...cards, ...cards].map((card, index) => (
            <div
              key={`left-${index}`}
              className="bg-zinc-900 text-white p-4 md:p-6 rounded-xl w-64 mx-2 flex-shrink-0 shadow-lg"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                />
                <div className="min-w-0">
                  <div className="font-bold text-base md:text-lg break-words">
                    {card.name}
                  </div>
                  <div className="text-sm text-zinc-400 break-words">
                    {card.handle}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm md:text-base break-words overflow-hidden">
                {card.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 (scroll right) */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black z-10 pointer-events-none" />
        <motion.div
          className="flex whitespace-nowrap min-w-full"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", ease: "linear", duration: 30 }}
        >
          {[...cards, ...cards].map((card, index) => (
            <div
              key={`right-${index}`}
              className="bg-zinc-900 text-white p-4 md:p-6 rounded-xl w-64 mx-2 flex-shrink-0 shadow-lg"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                />
                <div className="min-w-0">
                  <div className="font-bold text-base md:text-lg break-words">
                    {card.name}
                  </div>
                  <div className="text-sm text-zinc-400 break-words">
                    {card.handle}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm md:text-base break-words overflow-hidden">
                {card.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

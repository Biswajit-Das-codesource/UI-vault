import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import '../../App.css';
import qr1 from "../../assets/biswabhusanupi.jpg";
import qr2 from "../../assets/biswajitupi.jpg";

const cardData = [
  {
    name: "Biswabhusan Sahoo",
    title: "Fullstack Python Developer & Frontend Developer",
    img: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    qr: qr1,
  },
  {
    name: "Biswajit Das",
    title: "Fullstack Developer",
    img: "https://cdn-icons-png.flaticon.com/512/921/921347.png",
    qr: qr2,
  },
];

const AuroraPricingFlipCards = () => {
  const [flipped, setFlipped] = useState([false, false]);

  const toggleFlip = (index) => {
    const newFlip = [...flipped];
    newFlip[index] = !newFlip[index];
    setFlipped(newFlip);
  };

  return (
    <>
      <style>
        {`
          .perspective {
            perspective: 1500px;
          }
          .flip-card {
            transform-style: preserve-3d;
            transition: transform 0.8s ease-in-out;
          }
          .flip-card.rotate-y-180 {
            transform: rotateY(180deg);
          }
          .flip-card-front,
          .flip-card-back {
            backface-visibility: hidden;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}
      </style>

      <div className="min-h flex flex-wrap justify-center items-center gap-10 bg-black p-6">
        {cardData.map((card, index) => (
          <div key={index} className="relative w-72 h-96 perspective">
            <div
              className={`flip-card relative w-full h-full ${
                flipped[index] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Side */}
              <div className="flip-card-front absolute w-full h-full bg-[#111] rounded-2xl border border-white p-6 flex flex-col items-center justify-between shadow-[0_0_30px_#ffffff15]">
                <img
                  src={card.img}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-2 border-white"
                />
                <div className="text-center mt-4">
                  <h3 className="text-white text-xl font-bold">{card.name}</h3>
                  <p className="text-sm text-gray-300 mt-1">{card.title}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleFlip(index)}
                  className="relative px-6 py-3 mt-4 rounded-lg overflow-hidden border border-white text-white z-10"
                >
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full z-0"
                    initial={{ opacity: 0 }}
                    animate={{
                      background:
                        "radial-gradient(circle at 30% 30%, rgba(0,191,255,0.4), transparent), radial-gradient(circle at 70% 70%, rgba(230,230,250,0.4), transparent)",
                      opacity: 1,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "mirror",
                    }}
                  />
                  <span className="relative z-10">Fuel Me Energy ☕</span>
                </motion.button>
              </div>

              {/* Back Side */}
              <div className="flip-card-back absolute w-full h-full bg-[#111] rounded-2xl border border-white p-6 flex flex-col items-center justify-between shadow-[0_0_30px_#ffffff15]">
                <motion.img
                  src={card.qr}
                  alt="QR Code"
                  className="w-60 h-60"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <p className="text-white text-2xl">😊</p>
                <button
                  onClick={() => toggleFlip(index)}
                  className="px-4 py-2 mt-4 border border-white rounded-lg text-white hover:bg-white hover:text-black transition"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AuroraPricingFlipCards;

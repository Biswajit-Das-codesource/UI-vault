import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
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

  return (
    <div className="min-h bg-black flex flex-wrap justify-center items-center gap-10 p-6">
      {cardData.map((card, index) => {
        const cardRef = useRef(null);
        const mouseX = useMotionValue(0.5);
        const mouseY = useMotionValue(0.5);
        const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
        const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);
        const glowX = useTransform(mouseX, (v) => `${v * 100}%`);
        const glowY = useTransform(mouseY, (v) => `${v * 100}%`);

        const handleMouseMove = (e) => {
          const rect = cardRef.current.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          mouseX.set(x);
          mouseY.set(y);
        };

        const handleMouseLeave = () => {
          mouseX.set(0.5);
          mouseY.set(0.5);
        };

        const toggleFlip = (idx) => {
          const newFlip = [...flipped];
          newFlip[idx] = !newFlip[idx];
          setFlipped(newFlip);
        };

        return (
          <motion.div
            key={index}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-72 h-90 perspective  rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Cursor Glow */}
            <motion.div
              className="absolute w-40 h-40 bg-pink-500/20 blur-2xl rounded-full pointer-events-none z-0"
              style={{
                left: glowX,
                top: glowY,
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Mirror Shine */}
            <motion.div
              className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-3 z-10 pointer-events-none"
              animate={{ left: ["-75%", "125%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />

            {/* Flip Wrapper */}
            <div
              className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
                flipped[index] ? "rotate-y-180" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-gray-950 border border-white rounded-2xl p-6 flex flex-col items-center justify-between shadow-[0_0_40px_#ffffff22] z-20 backface-hidden">
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
                  <span className="relative z-10">Fuel Me Energy ☕</span>
                </motion.button>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-black rounded-2xl border border-white p-6 flex flex-col items-center justify-between shadow-[0_0_40px_#ffffff22] rotate-y-180 z-20 backface-hidden">
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
          </motion.div>
        );
      })}
    </div>
  );
};

export default AuroraPricingFlipCards;

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCreditCard, FaLock, FaWifi } from "react-icons/fa";
import "../../App.css";

function PaymentCard() {
  return (
    <div className="min-h flex items-center justify-center bg-black p-6 sm:p-12 relative overflow-hidden">
      {/* Neon Animated Background Glows */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-40 z-0"
        style={{ background: "radial-gradient(circle, #00ffff, transparent)" }}
        animate={{
          x: [-250, 250, -250],
          y: [-200, 200, -200],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-30 z-0"
        style={{ background: "radial-gradient(circle, #ff00ff, transparent)" }}
        animate={{
          x: [200, -200, 200],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Payment Card */}
      <div className="relative z-10 bg-black border-2 border-gray-800 rounded-2xl p-6 sm:p-8 w-full max-w-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        <div className="flex justify-between items-center mb-6">
          <FaCreditCard className="text-white text-xl" />
          <FaWifi className="text-white text-xl rotate-90" />
        </div>

        <div className="text-white text-lg font-mono tracking-widest mb-2">
          **** **** **** 2468
        </div>

        <div className="flex justify-between text-sm text-gray-400 mb-6">
          <div>
            <p className="uppercase">Card Holder</p>
            <p className="text-white font-semibold">Biswabhusan Sahoo</p>
          </div>
          <div>
            <p className="uppercase">Expires</p>
            <p className="text-white font-semibold">12/29</p>
          </div>
        </div>

        <div className="bg-white h-[1px] opacity-20 my-4"></div>

        <div className="text-white text-sm flex justify-between items-center">
          <div>Total due</div>
          <div className="text-xl font-bold">$29.99</div>
        </div>

        <button className="mt-6 w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default PaymentCard;

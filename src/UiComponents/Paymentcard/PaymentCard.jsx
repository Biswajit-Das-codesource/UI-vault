import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCreditCard, FaWifi } from "react-icons/fa";

function AnimatedPaymentCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center items-center p-4 text-white">
      {/* Payment Form Container */}
      <div className="bg-gray-950 rounded-2xl md:p-6 p-4 w-full max-w-md shadow-lg space-y-3">
        {/* Credit Card Preview */}
        <motion.div
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{ opacity: 1, rotateY: [0, 5, -5, 0] }}
          transition={{
            repeat: Infinity,
            repeatDelay: 1,
            duration: 1,
            ease: "easeInOut",
          }}
          className="relative w-full h-[200px] sm:h-[240px] bg-gradient-to-br from-[#1e2340] via-[#27346e] to-[#d62a4c] rounded-xl shadow-2xl p-5 sm:p-6 mb-6 mx-auto overflow-hidden border border-pink-500/30"
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />
          <div className="flex justify-between items-center z-10 relative">
            <FaCreditCard className="text-2xl sm:text-3xl" />
            <FaWifi className="text-md rotate-90" />
          </div>
          <div className="mt-10 sm:mt-12 font-mono text-[1rem] sm:text-[1.4rem] tracking-widest z-10 relative break-all">
            {cardNumber || "1234 5678 9012 3456"}
          </div>
          <div className="mt-5 flex justify-between text-xs sm:text-sm font-medium z-10 relative">
            <div>
              <p className="text-gray-300 text-[10px]">Card Holder</p>
              <p className="uppercase tracking-wide">{holderName || "Biswajit Das"}</p>
            </div>
            <div>
              <p className="text-gray-300 text-[10px]">Valid Thru</p>
              <p>{expiry || "08/25"}</p>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <h2 className="text-xl font-semibold">Payment Details</h2>
        <p className="text-sm text-gray-400">
          Enter your card information to complete the purchase.
        </p>

        {/* Input Fields */}
        <div className="space-y-2 mt-3">
          <div>
            <label className="text-sm text-white">Name on Card</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              value={holderName}
              onChange={(e) => setHolderName(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-xl outline-none border border-[#2a2a2a] focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="text-sm text-white">Card Number</label>
            <input
              type="text"
              placeholder="e.g. 1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength={19}
              className="w-full mt-1 px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-xl outline-none border border-[#2a2a2a] focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <div className="flex-1">
              <label className="text-sm text-white">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                maxLength={5}
                className="w-full mt-1 px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-xl outline-none border border-[#2a2a2a] focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-white">CVC</label>
              <input
                type="text"
                placeholder="e.g. 123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                maxLength={4}
                className="w-full mt-1 px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-xl outline-none border border-[#2a2a2a] focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <button className="w-full mt-3 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default AnimatedPaymentCard;

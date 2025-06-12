import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import "../../App.css";

function GradientPaymentCard() {
  return (
    <div className="min-h flex items-center justify-center bg-black p-4 sm:p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-br from-pink-600 via-fuchsia-600 to-violet-600 rounded-2xl p-1 shadow-[0_0_40px_#ff00ff55] w-full max-w-sm border border-black"
      >
        <div className="bg-gray-950 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-[0_0_10px_#ff00ff]">
            Send Payment
          </h2>
          <p className="text-pink-300 mb-6 text-sm">
            You're about to send money to:
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_8px_#ff00ff88]">
              Biswajit Das
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              UPI ID: biswajit@upi
            </p>
          </div>

          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-white font-semibold mb-2"
            >
              Amount
            </label>
            <input
              id="amount"
              type="number"
              placeholder="Enter amount"
              className="w-full px-4 py-2 rounded-xl bg-[#121212] border border-pink-500 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-[0_0_10px_#ff00ff33]"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#121212] text-white border border-[#333] hover:bg-[#1a1a1a] transition shadow-[0_0_12px_#ff00ff55]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold hover:opacity-90 transition shadow-[0_0_20px_#ff00ffcc]"
            >
              Pay ₹
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GradientPaymentCard;

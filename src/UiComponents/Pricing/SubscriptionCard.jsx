import React from "react";
import "../../App.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaDollarSign, FaUsers, FaDownload } from "react-icons/fa";

function SubscriptionCard() {
  return (
    <div className="min-h flex items-center justify-center bg-[#111111] p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-[#111111] rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-sm border border-[#232323]"
      >
        <h2 className="text-2xl font-bold text-white mb-1">Subscription Plan</h2>
        <p className="text-gray-400 mb-6 text-sm">
          You are currently on the Pro plan
        </p>

        <div className="flex items-center mb-6">
          <span className="text-4xl font-extrabold text-white mr-2">$29.99</span>
          <span className="bg-white text-black text-sm font-semibold px-3 py-1 rounded-full">
            Monthly
          </span>
        </div>

        <ul className="space-y-3 mb-6 text-white">
          <li className="flex items-center gap-3">
            <FaDollarSign className="text-white" />
            Unlimited projects
          </li>
          <li className="flex items-center gap-3">
            <FaUsers className="text-white" />
            Unlimited team members
          </li>
          <li className="flex items-center gap-3">
            <FaDownload className="text-white" />
            5TB storage
          </li>
        </ul>

        <button className="w-full py-3 bg-white text-black font-medium rounded-xl hover:bg-gray-200 transition">
          Upgrade Plan
        </button>
      </motion.div>
    </div>
  );
}

export default SubscriptionCard;

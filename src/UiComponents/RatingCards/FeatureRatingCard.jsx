import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

const RatingRow = ({ label, rating }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => {
      if (rating >= i + 1) return <FaStar key={i} className="text-yellow-400" />;
      else if (rating >= i + 0.5) return <FaStarHalfAlt key={i} className="text-yellow-400" />;
      else return <FaRegStar key={i} className="text-gray-600" />;
    });

  return (
    <div className="flex justify-between items-center w-full text-white mb-3">
      <div className="text-sm font-medium">{label}</div>
      <div className="flex items-center gap-2">
        <div className="flex gap-1 text-lg">{stars}</div>
        <div className="text-sm text-gray-400">{rating.toFixed(1)}</div>
      </div>
    </div>
  );
};

const FeatureRatingCard = () => {
  return (
    <div className="min-h flex items-center justify-center bg-[#0a0a0a] px-4 py-8">
      <div className="w-full max-w-sm p-6 rounded-xl bg-[#0e0e0e] border border-gray-800 shadow-lg flex flex-col gap-6">
        <h3 className="text-white font-semibold text-lg">By feature</h3>

        <div className="flex flex-col gap-1">
          <RatingRow label="Value for money" rating={4.9} />
          <RatingRow label="Giftable" rating={3.7} />
        </div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#151515] rounded-xl p-5 text-center shadow-inner border border-gray-700"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/10555/10555778.png"
            alt="Review stars"
            className="w-16 h-16 mx-auto mb-3 animate-bounce"
          />
          <h4 className="text-white font-semibold text-md mb-1">Review this product</h4>
          <p className="text-sm text-gray-400 mb-4">Share your thoughts with other people.</p>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#8b5cf6",
              boxShadow: "0 0 10px #8b5cf6",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-violet-600 text-white px-4 py-2 rounded-lg font-medium w-full"
          >
            Write a review
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureRatingCard;

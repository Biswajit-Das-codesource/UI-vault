import React, { useState } from "react";

const GradientFeedbackCard = ({
  title = "Feedback",
  subtitle = "Help us improve our product",
  defaultSatisfaction = 50,
  placeholder = "Tell us what you think...",
  submitText = "Submit Feedback",
  onSubmit = (s, f) => alert(`Satisfaction: ${s}\nFeedback: ${f}`),
}) => {
  const [satisfaction, setSatisfaction] = useState(defaultSatisfaction);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(satisfaction, feedback);
  };

  return (
    <div className="min-h mt-5 flex items-center justify-center px-4 bg-black">
      <div className="max-w-sm w-full p-6 rounded-2xl bg-black text-white shadow-[inset_4px_4px_10px_rgba(255,255,255,0.1),inset_-4px_-4px_10px_rgba(255,0,128,0.2)] space-y-4 border border-[#2c2c2c]">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-2">
              How satisfied are you with our product?
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={satisfaction}
              onChange={(e) => setSatisfaction(Number(e.target.value))}
              className="w-full accent-pink-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Your feedback</label>
            <textarea
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder={placeholder}
              className="w-full p-3 rounded-xl bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none shadow-[inset_2px_2px_5px_rgba(255,255,255,0.05),inset_-2px_-2px_5px_rgba(255,0,128,0.2)]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-900 to-fuchsia-600 text-white rounded-xl font-medium shadow-md hover:opacity-90 transition"
          >
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GradientFeedbackCard;

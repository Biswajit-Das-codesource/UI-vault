import React, { useState } from "react";

const FeedbackCard = () => {
  const [satisfaction, setSatisfaction] = useState(50);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Satisfaction: ${satisfaction}\nFeedback: ${feedback}`);
    // Add submission logic here
  };

  return (
    <div className="min-h flex items-center justify-center bg-gray-950 p-4 sm:p-8">
      <div className="max-w-sm w-full p-6 bg-black text-white rounded-2xl shadow-lg space-y-4">
        <h2 className="text-xl font-bold">Feedback</h2>
        <p className="text-gray-400 text-sm">Help us improve our product</p>

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
              onChange={(e) => setSatisfaction(e.target.value)}
              className="w-full accent-white"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Your feedback</label>
            <textarea
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us what you think..."
              className="w-full p-3 rounded-xl bg-black text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackCard;

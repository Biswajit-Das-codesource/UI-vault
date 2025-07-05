import React, { useState } from "react";
import { MessageCircle } from "lucide-react"; // or any icon you prefer

const FeedbackWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Feedback Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed  bottom-6 right-6 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-3 rounded-2xl shadow-lg transition-all cursor-pointer"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold">Give Feedback</span>
      </button>

      {/* Feedback Form */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 bg-[#121212] border border-gray-700 p-6 rounded-xl w-96 shadow-2xl space-y-4">
          <h3 className="text-xl font-bold text-white">💬 Feedback</h3>
          <form
            action="https://formspree.io/f/mvgrnkqz"
            method="POST"
            className="space-y-4"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your message..."
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-lg font-semibold transition"
            >
              Submit
            </button>
          </form>
          <button
            onClick={() => setOpen(false)}
            className="mt-3 text-sm font-medium text-gray-100 bg-red-700 hover:text-white transition duration-200 px-4 py-2 rounded-xl "
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default FeedbackWidget;

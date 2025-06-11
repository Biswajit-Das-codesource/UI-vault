import React from 'react';
import "../../App.css";

function LightThemeCard() {
  return (
    <div className="min-h flex items-center justify-center bg-black p-4 sm:p-8">
      <div className="bg-gradient-to-br from-[#ffffff] via-[#cea0ff] to-[#ffffff] border border-gray-200 rounded-2xl p-6 sm:p-8 w-full max-w-sm shadow-[0_4px_20px_rgba(255,182,193,0.2)]">
        <h2 className="text-3xl font-bold text-black mb-2">Login</h2>
        <p className="text-gray-800 mb-6">Enter your credentials to access your account.</p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-xl bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
              autoComplete="email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-black font-semibold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-xl bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
              autoComplete="current-password"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3 rounded-xl border border-gray-300 text-black hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LightThemeCard;

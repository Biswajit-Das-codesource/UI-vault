import React from 'react';
import "../../App.css"

function LoginCard() {
  return (
    <div className="min-h flex items-center justify-center bg-[#111111] p-4 sm:p-8">
      <div className="bg-[#111111] rounded-2xl shadow-lg p-4 sm:p-8 w-full max-w-sm sm:max-w-sm border border-[#232323]">
        <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
        <p className="text-gray-300 mb-6">
          Enter your credentials to access your account.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"  
              className="w-full px-4 py-2 rounded-xl bg-[#111111] border border-[#232323] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              autoComplete="email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white font-semibold mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-xl bg-[#111111] border border-[#232323] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              autoComplete="current-password"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#111111] border border-[#232323] text-white font-medium hover:bg-[#232323] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;  
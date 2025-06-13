/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import GithubStarButton from "./GithubButton";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = [
    "Components",
    "Backgrounds",
    "Installation",
    "Documentation",
    "Alerts",
    "Bentogrid",
    "Card",
    "SocialCard",
    "Profilecard",
    "TweetCard",
    "Pricing",
    "Button",
    "Paymentcard",
    "Testimonials",
    "Carousel",
    "Barchart",
    "Shinytext",
    "Feedback",
    "Rating",
  ];

  return (
    <div className="overflow-hidden">
      <nav className="bg-black text-white p-5 overflow-hidden">
        <div className="flex items-center justify-between flex-wrap">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-100 via-[#C0C0C0] to-slate-200 text-transparent bg-clip-text tracking-wide drop-shadow-md">
              UIVault
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-4 ml-10 font-semibold">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link}
                  to={`/components/${link.toLowerCase()}`}
                  className="text-base hover:text-gray-300 transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* GitHub Button (Desktop only) */}
            <div className="hidden md:block">
              <GithubStarButton />
            </div>

            {/* Documentation Search */}
            <input
              type="text"
              placeholder="Search documentation..."
              className="hidden md:block bg-gray-900 text-gray-300 text-sm rounded-lg px-5 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />

            {/* Social Icons */}
            <div className="flex items-center gap-4 ml-2 text-white text-xl">
              <a href="https://x.com/uivaultdev" target="_blank" rel="noreferrer">
                <FaXTwitter className="hover:text-gray-400 transition" />
              </a>
              <a href="https://instagram.com/uivaultdev" target="_blank" rel="noreferrer">
                <FaInstagram className="hover:text-pink-400 transition" />
              </a>
              <a href="https://github.com/uivaultdev/ui-vault" target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-gray-400 transition" />
              </a>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-2xl mt-1.5">
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-nav"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 md:hidden space-y-4 absolute z-[999] bg-black p-6 w-full left-0 shadow-xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link}
                  to={`/components/${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-base hover:text-gray-300 transition-colors"
                >
                  {link}
                </Link>
              ))}

              {/* GitHub Button (Mobile only) */}
              <div className="pt-2">
                <GithubStarButton />
              </div>

              {/* Mobile Search */}
              <input
                type="text"
                placeholder="Search documentation..."
                className="mt-2 w-full bg-gray-900 text-gray-300 text-sm rounded-lg px-5 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />

              {/* Mobile Social Icons */}
              <div className="flex justify-center items-center gap-6 mt-5 text-2xl text-white">
                <a href="https://x.com/uivaultdev" target="_blank" rel="noreferrer">
                  <FaXTwitter />
                </a>
                <a href="https://instagram.com/uivaultdev" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://github.com/uivaultdev/ui-vault" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default Navbar;

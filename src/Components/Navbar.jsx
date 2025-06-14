/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import GithubStarButton from "./GithubButton";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const isActive = (link) =>
    location.pathname.includes(link.toLowerCase().replace(/\s+/g, "-"));

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const coreLinks = [
    "Installation",
    "Documentation",
    "Components",
    "Backgrounds",
  ];
  const specialLinks = ["Lens", "Bentogrid", "Globe", "Imageeffect", "Marquee"];
  const otherLinks = [
    "Alerts",
    "Card",
    "SocialCard",
    "OrbitingLogo",
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

  const renderLink = (link) => (
    <Link
      key={link}
      to={`/components/${link.toLowerCase().replace(/\s+/g, "-")}`}
      onClick={() => setIsMenuOpen(false)}
      className={`text-base transition-colors ${
        isActive(link)
          ? "text-white font-semibold"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {link}
    </Link>
  );

  return (
    <div>
      <nav className="relative z-50 bg-black text-white p-5 w-full">
        <div className="flex items-center justify-between flex-wrap">
          {/* Logo + Desktop Links */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-100 via-[#C0C0C0] to-slate-200 text-transparent bg-clip-text tracking-wide drop-shadow-md">
              UIVault
            </div>
            <div className="hidden md:flex items-center space-x-6 ml-10 font-semibold">
              {coreLinks.map(renderLink)}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <GithubStarButton />
            </div>
            <input
              type="text"
              placeholder="Search documentation..."
              className="hidden md:block bg-gray-900 text-gray-300 text-sm rounded-lg px-5 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <div className="flex items-center gap-4 ml-2 text-white text-xl">
              <a
                href="https://x.com/uivaultdev"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter className="hover:text-gray-400 transition" />
              </a>
              <a
                href="https://instagram.com/uivaultdev"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="hover:text-pink-400 transition" />
              </a>
              <a
                href="https://github.com/uivaultdev/ui-vault"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-gray-400 transition" />
              </a>
            </div>

            {/* Hamburger */}
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
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-y-auto max-h-[90vh] md:hidden absolute z-50 bg-black p-6 w-full left-0 top-full shadow-xl space-y-4 flex flex-col"
            >
              <div className="space-y-2 flex flex-col">{coreLinks.map(renderLink)}</div>

              {/* Special Section */}
              <div className="mt-4">
                <div className="text-xs uppercase text-pink-400 font-bold mb-2 flex items-center gap-2">
                  ✨ Special
                  <span className="bg-pink-700 text-white text-[10px] px-2 py-0.5 rounded-full">
                    Hot
                  </span>
                </div>
                <div className="space-y-2 border-l-2 border-pink-600 pl-3 ml-1 flex flex-col">
                  {specialLinks.map(renderLink)}
                </div>
              </div>

              {/* Other Links */}
              <div className="mt-6 space-y-2 flex flex-col">{otherLinks.map(renderLink)}</div>

              {/* GitHub Button */}
              <div className="pt-2">
                <GithubStarButton />
              </div>

              {/* Search */}
              <input
                type="text"
                placeholder="Search documentation..."
                className="mt-4 w-full bg-gray-900 text-gray-300 text-sm rounded-lg px-5 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />

              {/* Social Icons */}
              <div className="flex justify-center items-center gap-6 mt-5 text-2xl text-white">
                <a
                  href="https://x.com/uivaultdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://instagram.com/uivaultdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/uivaultdev/ui-vault"
                  target="_blank"
                  rel="noreferrer"
                >
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

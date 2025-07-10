/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";
import GithubStarButton from "./GithubButton";
import NpmDownloadButton from "./GithubButton";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const isActive = (link) =>
    location.pathname.includes(link.toLowerCase().replace(/\s+/g, "-"));

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const coreLinks = ["Installation", "Documentation"];
  const components = [
    "Lens",
    "Globe",
    "Draggablecards",
    "GridBackground",
    "Imageeffect",
    "Marquee",
    "Meteors",
    // "StarBackground",
    "Silk",
    "3dPin",
    "Bentogrid",
    "BeamsBackground",
    "CosmicRayBurst",
    "Carousel",
    "CursorAura",
    "Hovercard",
    "IframePop",
    "Neonlamb",
    "OrbitingLogo",
    "PointerGrid",
    "Tiltcard",
    "Testimonials",
    "ToggleButtons",
    "ToolTips",
  ];

  const specialLinks = components.slice(0, 9);
  const otherLinks = [...new Set(components.slice(9))];

  const filtered = components.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

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

  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
      if (e.key === "Escape") {
        setIsCommandPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div>
      <nav className="relative z-50 bg-black text-white p-5 w-full">
        <div className="flex items-center justify-between flex-wrap">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-100 via-[#C0C0C0] to-slate-200 text-transparent bg-clip-text tracking-wide drop-shadow-md">
              UIVault
            </div>
            <div className="hidden md:flex items-center space-x-6 ml-10 font-semibold">
              {coreLinks.map(renderLink)}
            </div>
          </div>

          {isCommandPaletteOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-start justify-center pt-32"
              onClick={() => setIsCommandPaletteOpen(false)}
            >
              <div
                className="bg-[#0f0f0f] w-full max-w-xl mx-auto rounded-xl shadow-xl p-4 border border-gray-700"
                onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
              >
                <input
                  type="text"
                  autoFocus
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search components..."
                  className="w-full bg-gray-900 text-gray-300 text-base rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />

                <ul className="mt-3 max-h-60 overflow-y-auto text-sm">
                  {filtered.length > 0 ? (
                    filtered.map((item) => (
                      <li key={item}>
                        <Link
                          to={`/components/${item.toLowerCase()}`}
                          className="block px-4 py-2 hover:bg-gray-800 rounded-md text-white"
                          onClick={() => {
                            setIsCommandPaletteOpen(false);
                            setSearch("");
                          }}
                        >
                          {item}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500">
                      No results found
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}

          {/* Right Side */}
          <div className="flex items-center gap-4 relative">
            <div className="hidden md:block">
              <NpmDownloadButton />
            </div>

            {/* Search */}
            <div className="relative hidden md:block w-60">
              <input
                type="text"
                value={search}
                onClick={() => setIsCommandPaletteOpen(true)}
                placeholder="Search components     CTRL + K"
                className="w-full bg-gray-900 text-gray-300 text-sm rounded-lg px-5 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 ml-2 text-white text-xl">
              <a href="https://x.com/Uivault" target="_blank" rel="noreferrer">
                <FaXTwitter className="hover:text-gray-400 transition" />
              </a>
              <a
                href="https://www.instagram.com/_uivault._?utm_source=qr&igsh=cXM1aDhobXZrZmwy"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="hover:text-pink-400 transition" />
              </a>
              <a
                href="https://github.com/Biswajit-Das-codesource/UI-vault"
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
              <div className="space-y-2 flex flex-col">
                {coreLinks.map(renderLink)}
              </div>

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

              <div className="mt-6 space-y-2 flex flex-col">
                {otherLinks.map(renderLink)}
              </div>

              <GithubStarButton />

              {/* Mobile Search */}
              <div className="relative mt-4">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search documentation..."
                  className="w-full bg-gray-900 text-gray-300 text-sm rounded-lg px-5 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                {search && (
                  <ul className="absolute mt-1 w-full bg-gray-900 text-black rounded-md shadow-lg max-h-60 overflow-y-auto border border-gray-200 z-50">
                    {filtered.length > 0 ? (
                      filtered.map((item) => (
                        <li key={item}>
                          <Link
                            to={`/components/${item.toLowerCase()}`}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 transition"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setSearch("");
                            }}
                          >
                            {item}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-sm text-gray-500">
                        No results found
                      </li>
                    )}
                  </ul>
                )}
              </div>

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
    </motion.div>
  );
}

export default Navbar;

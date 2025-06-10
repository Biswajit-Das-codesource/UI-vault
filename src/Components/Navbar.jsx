import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = ["Docs", "Component", "Blocks", "Charts", "Themes", "Colors"];

  return (
    <div className="overlow-hidden">
      <nav className="bg-black text-white p-5 overflow-hidden">
        <div className="flex items-center justify-between overflow-hidden" >
          {/* Left section: logo or brand (optional) */}
          <div className="text-xl font-bold">UI Vault</div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 overflow-hidden">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-base hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Search bar */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search documentation..."
              className="bg-gray-900 text-gray-300 text-sm rounded-lg px-5 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Hamburger Icon (mobile only) */}
          <div className="md:hidden overflow-hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden space-y-3 absolute z-999 bg-black p-14 ">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-base hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}

            {/* Mobile search bar */}
            <input
              type="text"
              placeholder="Search documentation..."
              className="mt-2 w-full bg-gray-900 text-gray-300 text-sm rounded-lg px-5 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;

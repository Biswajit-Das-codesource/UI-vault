import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = [
    "Components",
    "Backgrounds",
    "Installation",
    "Documentation",
    "Alerts",
    "Card",
    "Profilecard",
    "Pricing",
    "Button",
    "AIchat",
    "Feedback",
    "Barchart",
    "Calendar",
    "Carousel",
    "Signup",
    "Rating",
  ];

  return (
    <div className="overflow-hidden">
      <nav className="bg-black text-white p-5 overflow-hidden">
        <div className="flex items-center justify-between overflow-hidden">
          {/* Logo */}
          <div className="flex items-center space-x-4 overflow-hidden">
            <div className="text-xl font-bold">UIVault</div>

            {/* Desktop Nav (limit to first 6 links) */}
            <div className="hidden md:flex items-center justify-center space-x-4 overflow-hidden md:ml-10 font-semibold">
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

          {/* Desktop Search */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search documentation..."
              className="bg-gray-900 text-gray-300 text-sm rounded-lg px-5 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden overflow-hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav (show full list) */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden space-y-3 absolute z-[999] bg-black p-6 w-full left-0">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={`/components/${link.toLowerCase()}`}
                className="block text-base hover:text-gray-300 transition-colors"
              >
                {link}
              </Link>
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

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { AiOutlineAppstore, AiOutlineRocket } from "react-icons/ai";

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState({
    installation: true,
    components: true,
  });

  const toggle = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const isActive = (path) => location.pathname === path;

  const NavItem = ({ name, to, icon, isChild }) => (
    <Link
      to={to}
      className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all relative ${
        isActive(to)
          ? "bg-white text-black font-semibold"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {isChild && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-4 ml-1" />
      )}
      {icon && <span>{icon}</span>}
      {name}
    </Link>
  );

  const allComponents = [
    "Alerts",
    "Barchart",
    "Bentogrid",
    "Backgrounds",
    "Button",
    "Card",
    "Carousel",
    "Documentation",
    "Feedback",
    "Globe",
    "Imageeffect",
    "Lens",
    "Marquee",
    "Paymentcard",
    "Pricing",
    "Profilecard",
    "Rating",
    "Shinytext",
    "SocialCard",
    "Testimonials",
    "TweetCard",
  ];

  const specialComponents = [
    "Lens",
    "Bentogrid",
    "Globe",
    "Imageeffect",
    "Marquee",
  ];

  const normalComponents = allComponents.filter(
    (item) => !specialComponents.includes(item)
  );

  return (
    <aside className="w-60 bg-black border-r border-gray-800 p-4 hidden md:block overflow-y-auto scrollbar-hide">
      {/* Installation Group */}
      <button
        onClick={() => toggle("installation")}
        className="flex justify-between items-center w-full text-white text-sm font-semibold mb-1"
      >
        <span className="flex items-center gap-2 text-base">
          <AiOutlineRocket size={"1.6rem"} /> Installation
        </span>
        {open.installation ? <FiChevronDown /> : <FiChevronRight />}
      </button>

      {open.installation && (
        <div className="ml-3 mb-3 space-y-1 border-l border-gray-700 pl-3">
          <NavItem name="Installation" to="/getting-started" isChild />
          <NavItem name="Usage" to="/usage" isChild />
          <NavItem name="Registry" to="/registry" isChild />
          <NavItem name="Our Story" to="/our-story" isChild />
        </div>
      )}

      {/* Components Group */}
      <button
        onClick={() => toggle("components")}
        className="flex justify-between items-center w-full text-white text-sm font-semibold mb-1 mt-4"
      >
        <span className="flex items-center gap-2 text-base">
          <AiOutlineAppstore size={"1.6rem"} /> Components
        </span>
        {open.components ? <FiChevronDown /> : <FiChevronRight />}
      </button>

      {open.components && (
        <div className="ml-3 mb-3 space-y-1 border-l border-gray-700 pl-3">
          {/* Special Components First */}
          <div className="mb-2">
            <div className="text-xs uppercase text-pink-400 font-bold mb-1 pl-1 flex items-center gap-1">
              ✨ Special
              <span className="bg-pink-700 text-white text-[10px] px-2 py-0.5 rounded-full">
                Hot
              </span>
            </div>
            <div className="border-l-2 border-pink-600 pl-3 ml-1 space-y-1">
              {specialComponents.map((item) => (
                <NavItem
                  key={item}
                  name={item}
                  to={`/components/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  isChild
                />
              ))}
            </div>
          </div>

          {/* Then Normal Components */}
          {normalComponents.map((item) => (
            <NavItem
              key={item}
              name={item}
              to={`/components/${item.toLowerCase().replace(/\s+/g, "-")}`}
              isChild
            />
          ))}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

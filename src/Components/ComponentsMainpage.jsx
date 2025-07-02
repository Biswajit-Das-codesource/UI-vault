import React, { useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UiVaultBetaBanner from "../assets/UIvaultbeta";

const ComponentMainpage = () => {
  const location = useLocation();
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const components = [
    "Alerts",
    "Barchart",
    "Bentogrid",
    "Button",
    "Card",
    "Carousel",
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
  ].sort();

  return (
    <div className="bg-black text-white h-screen flex flex-col">
      {/* Navbar */}
      <UiVaultBetaBanner/>
      <Navbar />

      {/* Content wrapper */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Sidebar */}
        <Sidebar/>
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-hide bg-black">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ComponentMainpage;

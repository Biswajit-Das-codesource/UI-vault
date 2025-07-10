import React, { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UiVaultBetaBanner from "../assets/UIvaultbeta";
import FeedbackWidget from "./FeedWidget";

const ComponentMainpage = () => {
  const location = useLocation();
  const mainRef = useRef(null); // 👈 main scroll container ref

  useEffect(() => {
    // 👇 scroll on route change
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <div className="bg-black text-white h-screen flex flex-col">
      <UiVaultBetaBanner />
      <Navbar />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        <Sidebar />

        <main
          ref={mainRef}
          className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-hide bg-black"
        >
          <Outlet />
        </main>

        <FeedbackWidget />
      </div>
    </div>
  );
};

export default ComponentMainpage;

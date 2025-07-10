// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay ensures scroll triggers after page render
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

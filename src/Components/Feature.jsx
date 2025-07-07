/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import {
  FaBell,
  FaChartBar,
  FaTh,
  FaCreditCard,
  FaIdCard,
  FaGlobe,
  FaImage,
  FaMoneyBillWave,
  FaTag,
  FaStar,
  FaUserFriends,
  FaTwitter,
  FaPhotoVideo,
  FaLightbulb,
  FaCrosshairs,
  FaBorderAll,
} from "react-icons/fa";
import { MdFeedback, MdOutlineViewCarousel } from "react-icons/md";
import { PiCursorFill } from "react-icons/pi";
import { TbStarsFilled } from "react-icons/tb";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { HiOutlineCursorClick } from "react-icons/hi";

const components = [
  { name: "Alerts", icon: <FaBell /> },
  { name: "Barchart", icon: <FaChartBar /> },
  { name: "Bentogrid", icon: <FaTh /> },
  { name: "Button", icon: <FaCreditCard /> },
  { name: "Card", icon: <FaIdCard /> },
  { name: "Carousel", icon: <MdOutlineViewCarousel /> },
  { name: "Feedback", icon: <MdFeedback /> },
  { name: "Globe", icon: <FaGlobe /> },
  { name: "Imageeffect", icon: <FaImage /> },
  { name: "Lens", icon: <FaPhotoVideo /> },
  { name: "Marquee", icon: <HiOutlineCursorClick /> },
  { name: "Paymentcard", icon: <FaMoneyBillWave /> },
  { name: "Pricing", icon: <FaTag /> },
  { name: "Profilecard", icon: <FaIdCard /> },
  { name: "Rating", icon: <FaStar /> },
  { name: "Shinytext", icon: <TbStarsFilled /> },
  { name: "SocialCard", icon: <FaUserFriends /> },
  { name: "Testimonials", icon: <FaLightbulb /> },
  { name: "TweetCard", icon: <FaTwitter /> },
  { name: "BeamsBackground", icon: <BsBoundingBoxCircles /> },
  { name: "CosmicRayBurst", icon: <FaStar /> },
  { name: "CursorAura", icon: <PiCursorFill /> },
  { name: "GridBackground", icon: <FaBorderAll /> },
  { name: "IframePop", icon: <FaImage /> },
  { name: "PointerGrid", icon: <FaCrosshairs /> },
  { name: "Tiltcard", icon: <FaCreditCard /> },
];

export default function Feature() {
  return (
    <div className="min-h p-3 bg-black flex flex-col gap-12 justify-center items-center px-4 py-13">
      {/* Row 1 */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black z-10 pointer-events-none" />
         <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold bg-gradient-to-r from-gray-100 via-slate-400 to-gray-200 bg-clip-text text-transparent drop-shadow-[0_1px_10px_rgba(255,255,255,0.2)] mt-6">
          Features & Components
        </h2>
        <div className="mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-gray-300 via-white to-gray-500 rounded-full shadow-md shadow-slate-300"></div>
      </div>

        <motion.div
          className="flex whitespace-nowrap min-w-full mt-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 40,
          }}
        >
          {[...components, ...components].map((comp, index) => (
            <motion.div
              key={`left-${index}`}
              className="bg-gray-950 text-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 rounded-xl w-[85%] sm:w-64 mx-2 flex-shrink-0 shadow-md"
              animate="animate"
              style={{
                border: "1px solid violet",
                borderRadius: "0.75rem",
                boxShadow: "0 0 5px #9333ea",
              }}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl sm:text-xl md:text-3xl text-violet-400">
                  {comp.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {comp.name}
                </h3>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-zinc-400">
                Explore the {comp.name} component
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black z-10 pointer-events-none" />
        <motion.div
          className="flex whitespace-nowrap min-w-full"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 40,
          }}
        >
          {[...components, ...components].map((comp, index) => (
            <motion.div
              key={`left-${index}`}
              className="bg-gray-950 text-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 rounded-xl w-[85%] sm:w-64 mx-2 flex-shrink-0 shadow-md"
              animate="animate"
              style={{
                border: "1px solid violet",
                borderRadius: "0.75rem",
                boxShadow: "0 0 5px #9333ea",
              }}
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl sm:text-3xl md:text-3xl text-violet-400">
                  {comp.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {comp.name}
                </h3>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-zinc-400">
                Explore the {comp.name} component
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

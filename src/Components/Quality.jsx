import { FaRocket, FaGlobe, FaCode, FaPalette, FaArrowRight } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import Tiltcard from "../UiComponents/TiltCard/TiltCard";
import Herotilt from "./HeroTilt";
import GlobeScene from "../UiComponents/Globe/Globecard";
import Gridlinehero from "./Gridlinehero";
import Marqueehero from "./Marqueehero";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const FeatureComponents = [Herotilt, GlobeScene, Gridlinehero, Marqueehero];
const ComponentRoutes = [
  "/components/tiltcard",
  "/components/globe",
  "/components/gridline",
  "/components/marquee",
];

export default function Quality() {
  const [previewIdx, setPreviewIdx] = useState(null);

  const closeModal = () => setPreviewIdx(null);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          Some Popular Components ✨
        </h2>
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-5">
        {FeatureComponents.map((Component, idx) => {
          const route = ComponentRoutes[idx];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between border border-zinc-800 bg-gradient-to-b from-[#111] to-black p-4 rounded-xl shadow-lg hover:shadow-orange-500/30 hover:ring-1 hover:ring-violet-700 duration-300 min-h-[350px]"
            >
              {/* Component Preview */}
              <div className="rounded-md overflow-hidden mb-4 scale-[0.95] group-hover:scale-100 transition-transform duration-300">
                <Component />
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-between gap-3 mt-auto">
                <Link to={route}>
                  <motion.button
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-full py-2.5 text-sm font-semibold tracking-wide text-white 
                      bg-gradient-to-br from-violet-950 via-black to-purple-950 
                      border border-pink-500/40 rounded-xl shadow-lg 
                      hover:text-pink-400 hover:shadow-pink-500/30 
                      hover:ring-1 hover:ring-pink-500/60 
                      transition-all duration-300 backdrop-blur-md 
                      relative overflow-hidden group ml-10"
                  >
                    <span className="relative z-10">✨ Try Component</span>
                    <span className="absolute inset-0 bg-pink-500/10 group-hover:bg-pink-500/20 transition-all duration-300 blur-lg opacity-30 rounded-xl pointer-events-none" />
                  </motion.button>
                </Link>

                <button
                  className="p-2 border border-zinc-700 rounded-full hover:bg-zinc-800 transition"
                  onClick={() => setPreviewIdx(idx)}
                >
                  <HiOutlineExternalLink className="text-orange-400 text-lg" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View More Button */}
      <div className="mt-12 text-center flex justify-center items-center">
        <Link to="/components">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 text-white bg-zinc-900 border border-zinc-700 rounded-full text-sm font-medium hover:bg-zinc-800 transition duration-300 flex justify-center items-center gap-1"
          >
             View More Components  <HiOutlineExternalLink className="text-orange-400 text-lg" />
          </motion.button>
        </Link>
      </div>

      {/* Modal Preview Popup */}
      <AnimatePresence>
        {previewIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full h-full flex items-center justify-center p-6"
            >
              <div className="relative w-full h-full max-w-5xl max-h-[90vh] bg-black rounded-2xl p-4 overflow-auto shadow-2xl ">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 text-white hover:text-orange-400 text-xl"
                >
                  ✖
                </button>

                <div className="w-full h-full overflow-auto">
                  {previewIdx !== null &&
                    (() => {
                      const PreviewComponent = FeatureComponents[previewIdx];
                      return <PreviewComponent />;
                    })()}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversalAccess,
  FaRocket,
  FaPaintBrush,
  FaGlobe,
  FaAdjust,
  FaCogs,
  FaLanguage,
  FaEdit,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUniversalAccess className="text-violet-500 text-2xl" />,
    title: "Accessibility first",
    description: "Fully WCAG 2.0 compliant, made with best a11y practices",
  },
  {
    icon: <FaGlobe className="text-violet-500 text-2xl" />,
    title: "Responsive design",
    description: "Looks and works great on any device and screen size",
  },
  {
    icon: <FaAdjust className="text-violet-500 text-2xl" />,
    title: "dark mode",
    description: "Seamless switching between color schemes, 4 themes included",
  },
  {
    icon: <FaCogs className="text-violet-500 text-2xl" />,
    title: "Easy to customize",
    description: "Flexible options to match your product or brand",
  },
  {
    icon: <FaRocket className="text-violet-500 text-2xl" />,
    title: "Top performance",
    description: "Made for lightning-fast load times and smooth interactions",
  },
  {
    icon: <FaPaintBrush className="text-violet-500 text-2xl" />,
    title: "Production ready",
    description: "Thoroughly tested and launch-prepared",
  },
  {
    icon: <FaLanguage className="text-violet-500 text-2xl" />,
    title: "Localisation",
    description: "Easy to implement support for multiple languages and regions",
  },
  {
    icon: <FaEdit className="text-violet-500 text-2xl" />,
    title: "CMS friendly",
    description:
      "Built to work with your any headless content management system",
  },
];

export default function Featuretext() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Everything you need.
          <br />
          Nothing you don't.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className=" p-5 rounded-xl   transition-all shadow-lg hover:shadow-violet-500/20"
          >
            <div className="mb-4 flex items-center gap-3">
              {feature.icon}
              <h3 className="font-semibold text-white text-lg">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-zinc-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

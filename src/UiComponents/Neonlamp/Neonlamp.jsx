import { motion } from "framer-motion";

const NeonLamp = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#050B1E] text-center px-4 overflow-hidden">
      {/* Neon bar with Framer Motion blinking animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative w-64 md:w-80 h-[4px] bg-cyan-300 z-10 rounded-full shadow-[0_0_60px_20px_rgba(34,211,238,0.9)]"
      >
        {/* Downward glow with Framer Motion animation */}
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[400px] md:w-[700px] h-[300px] md:h-[300px] bg-cyan-300 rounded-full blur-[130px] md:blur-[250px] opacity-70 pointer-events-none mix-blend-screen z-0"
        />
      </motion.div>

      {/* Static Text */}
      <div className="relative z-20 mt-20 md:mt-24 text-3xl md:text-5xl font-medium leading-snug text-gray-300 tracking-tight">
        <div>Build lamps</div>
        <div>
          the <span className="text-white">right</span> way
        </div>
      </div>
    </div>
  );
};

export default NeonLamp;

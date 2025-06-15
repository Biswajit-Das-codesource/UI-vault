import { motion } from 'framer-motion';

const PointerGrid = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden px-4">
      {/* Main Text */}
      <h1 className="text-white text-5xl sm:text-6xl md:text-6xl font-bold z-20 text-center">UI VAULT</h1>

      {/* Horizontal light glow under text */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[calc(50%+2.5rem)] w-[60%] sm:w-[70%] md:w-[60%] h-[3px] bg-cyan-400 shadow-[0_0_60px_15px_rgba(34,211,238,0.6)] z-10 mt-4"
      />

      {/* Full-screen animated starfield background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <motion.div
          animate={{ backgroundPositionY: ["0%", "100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full bg-[radial-gradient(white_1px,transparent_1px)] [background-size:10px_10px] opacity-30"
        />
      </div>
    </div>
  );
};

export default PointerGrid;
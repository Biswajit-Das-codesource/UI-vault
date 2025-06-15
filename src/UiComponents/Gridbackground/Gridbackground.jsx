
import { motion } from "framer-motion";

const GridBackground = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center text-center">
      {/* Animated glowing background using Framer Motion */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at center, rgba(0,255,255,0.1), transparent 70%)",
            "radial-gradient(circle at center, rgba(255,0,255,0.12), transparent 70%)",
            "radial-gradient(circle at center, rgba(255,255,0,0.1), transparent 70%)",
            "radial-gradient(circle at center, rgba(0,255,255,0.1), transparent 70%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Shadow corners */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-40 h-32 bg-gradient-to-bl from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-black via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default GridBackground;
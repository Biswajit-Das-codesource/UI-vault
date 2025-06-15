import { motion } from "framer-motion";

const HoverSwitchCard = () => {
  return (
    <div className="flex items-center justify-center h-min md:p-8 bg-black ">
      <motion.div
        className="relative w-80 h-96 rounded-2xl overflow-hidden group shadow-xl border border-cyan-900"
        whileHover={{
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          transition: { type: "spring", stiffness: 80, damping: 12 },
        }}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center",
          perspective: 1000,
        }}
      >
        {/* 🔮 Animated Glow Behind */}
        <motion.div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-40 z-0 "
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* 🖼️ Default Image */}
        <img
          src="https://images.unsplash.com/photo-1652243699361-5ec1c2f710ca?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBzY3JlZW58ZW58MHx8MHx8fDA%3D"
          alt="Default"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 ease-in-out group-hover:opacity-0 z-10"
        />

        {/* 🖼️ Hover Image */}
        <img
          src="https://img.freepik.com/free-photo/beautiful-natural-landscape_23-2151839252.jpg"
          alt="Hovered"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 z-10"
        />

        {/* 📝 Overlay Text */}
        <div className="absolute bottom-0 w-full p-4 text-white z-30 bg-black/40 backdrop-blur-sm ">
          <h3 className="text-lg font-semibold">Aurora Card</h3>
          <p className="text-sm text-gray-300">Hover to reveal magic ✨</p>
        </div>
      </motion.div>
    </div>
  );
};

export default HoverSwitchCard;


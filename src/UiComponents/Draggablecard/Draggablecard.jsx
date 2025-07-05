"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "framer-motion";

// ✅ Image data now includes titles
const images = [
  {
    src: "https://i.pinimg.com/736x/71/4a/76/714a769c3a156d159053b1210dad3b6b.jpg",
    title: "Communication",
    top: "10%",
    left: "15%",
  },
  {
    src: "https://i.pinimg.com/originals/2c/0a/16/2c0a165c73498e2eca8759459e407756.jpg",
    title: "Discussion",
    top: "30%",
    left: "55%",
  },
  {
    src: "https://i.pinimg.com/736x/42/a6/20/42a620e32523e6d03bc12006e445bb69.jpg",
    title: "Sweet baby",
    top: "60%",
    left: "25%",
  },
  {
    src: "https://i.pinimg.com/736x/50/b0/41/50b0414e7b41336ad3c2482269ee650a.jpg",
    title: "Sweet Teddy",
    top: "40%",
    left: "70%",
  },
  
];

const DraggableCard = ({ src, title }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);
  const controls = useAnimationControls();

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig
  );
  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig
  );

  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  useEffect(() => {
    const updateConstraints = () => {
      setConstraints({
        top: -window.innerHeight / 2,
        left: -window.innerWidth / 2,
        right: window.innerWidth / 2,
        bottom: window.innerHeight / 2,
      });
    };
    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect() ?? {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
    };
    const deltaX = e.clientX - (rect.left + rect.width / 2);
    const deltaY = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => (document.body.style.cursor = "grabbing")}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            ...springConfig,
          },
        });

        const vX = velocityX.get();
        const vY = velocityY.get();
        const bounce = Math.min(0.8, Math.sqrt(vX * vX + vY * vY) / 1000);

        animate(info.point.x, info.point.x + vX * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + vY * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      className="relative w-60 h-72 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900 shadow-2xl p-0"
    >
      <img
        src={src}
        alt="draggable"
        className="w-full h-full object-cover rounded-md pointer-events-none "
      />

      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
      {/* ✅ Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black/50 text-white text-sm font-semibold ">
        {title}
      </div>
    </motion.div>
  );
};

export const DraggableCardGallery = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-slate-300 dark:from-black dark:to-neutral-800 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute"
          style={{ top: img.top, left: img.left }}
        >
          <DraggableCard src={img.src} title={img.title} />
        </div>
      ))}
    </div>
  );
};

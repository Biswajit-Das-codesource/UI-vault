import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Utility to generate star shadows
const generateStars = (count, color) => {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 4000) - 2000;
    const y = Math.floor(Math.random() * 4000) - 2000;
    shadows.push(`${x}px ${y}px ${color}`);
  }
  return shadows.join(', ');
};

const StarLayer = ({ count = 1000, size = 1, duration = 50, color = '#fff', className = '' }) => {
  const [boxShadow, setBoxShadow] = useState('');

  useEffect(() => {
    setBoxShadow(generateStars(count, color));
  }, [count, color]);

  return (
    <motion.div
      animate={{ y: [0, -2000] }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
      className={`absolute top-0 left-0 w-full h-[2000px] ${className}`}
    >
      <div
        className="absolute bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow,
        }}
      />
      <div
        className="absolute top-[2000px] bg-transparent rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          boxShadow,
        }}
      />
    </motion.div>
  );
};

const StarsBackground = ({
  children,
  className = '',
  factor = 0.05,
  speed = 50,
  damping = 20,
  stiffness = 50,
  starColor = '#fff',
  pointerEvents = true,
}) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, { damping, stiffness });
  const springY = useSpring(offsetY, { damping, stiffness });

  const handleMouseMove = useCallback((e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    offsetX.set(-(e.clientX - centerX) * factor);
    offsetY.set(-(e.clientY - centerY) * factor);
  }, [factor, offsetX, offsetY]);

  return (
    <div
      className={`relative w-full h-screen overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className={pointerEvents ? '' : 'pointer-events-none'}
      >
        <StarLayer count={1000} size={1} duration={speed} color={starColor} />
        <StarLayer count={400} size={2} duration={speed * 2} color={starColor} />
        <StarLayer count={200} size={3} duration={speed * 3} color={starColor} />
      </motion.div>
      {children}
    </div>
  );
};

export default StarsBackground;

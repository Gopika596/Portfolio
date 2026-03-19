import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-12 h-12 border border-neon-blue/50 rounded-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {/* Circuit lines and dots */}
        <div className="absolute inset-0 rounded-full border-t-2 border-neon-purple/50 scale-110" />
        <div className="absolute w-1 h-1 bg-neon-blue rounded-full top-0 left-1/2 -translate-x-1/2 shadow-[0_0_8px_#00f2ff]" />
        <div className="absolute w-1 h-1 bg-neon-purple rounded-full bottom-0 left-1/2 -translate-x-1/2 shadow-[0_0_8px_#bc13fe]" />
      </motion.div>

      {/* Outer Glow */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-24 h-24 bg-neon-blue/5 rounded-full blur-2xl"
      />
      
      {/* Center Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"
      />
    </div>
  );
};

export default CustomCursor;

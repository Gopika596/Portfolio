import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#020202] flex flex-col items-center justify-center"
    >
      <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-blue to-neon-purple"
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xs font-mono text-neon-blue tracking-widest uppercase mb-2">
          Initializing Neural Core
        </span>
        <span className="text-2xl font-display font-bold text-white">
          {progress}%
        </span>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-dashed border-neon-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
    </motion.div>
  );
};

export default LoadingScreen;

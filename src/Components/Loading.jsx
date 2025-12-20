import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#191022]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#7311d4]/20 blur-[100px] rounded-full" />
      
      <div className="relative flex flex-col items-center gap-6">
        {/* Pulsing Logo */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#7311d4] drop-shadow-[0_0_15px_rgba(115,17,212,0.6)]"
        >
          <span className="material-symbols-outlined text-7xl">polyline</span>
        </motion.div>

        {/* Loading Text with Shimmer */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold tracking-widest text-white uppercase font-display">
            Creative<span className="text-[#7311d4]">Contests</span>
          </h2>
          <div className="w-48 h-1 bg-[#261933] rounded-full overflow-hidden relative">
            <motion.div 
              className="absolute inset-0 bg-[#7311d4]"
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <p className="text-[#ad92c9] text-xs font-medium uppercase tracking-[0.2em] animate-pulse">
            Syncing Creative Engine...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading
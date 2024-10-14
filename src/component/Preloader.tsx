import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define the props type, which includes the onComplete function
interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const countUp = (currentValue: number, speed: number) => {
      if (currentValue <= 100) {
        setLoadingPercentage(currentValue);
        
        // Dynamic speed control: slower at the beginning, faster later
        let nextSpeed = speed;
        if (currentValue < 20) {
          nextSpeed = 100; // Slow for the first 20%
        } else if (currentValue < 50) {
          nextSpeed = 60; // Slightly faster until 50%
        } else if (currentValue < 80) {
          nextSpeed = 40; // Faster from 50-80%
        } else {
          nextSpeed = 20; // Fastest from 80-100%
        }

        timeout = setTimeout(() => countUp(currentValue + 1, nextSpeed), nextSpeed);
      } else {
        // Complete loading and trigger transition after small delay
        setTimeout(() => onComplete(), 500);
      }
    };

    countUp(1, 100); // Start counting with initial speed 100ms

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={loadingPercentage === 100 ? { y: '-100%' } : {}}
      transition={{
        duration: 1.8, // Increase duration for smoothness
        ease: [0.76, 0, 0.24, 1], // Smooth easing curve
      }}
      className="fixed inset-0 bg-black z-50 flex justify-center items-end p-10"
    >
      <p className="text-white text-6xl font-bold">
        {loadingPercentage}%
      </p>
    </motion.div>
  );
};

export default Preloader;

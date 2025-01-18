import React from 'react';
import { motion } from 'framer-motion';

const CuteRobot = () => {
  return (
    <motion.div
      className="w-10 h-10 relative"
      animate={{
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Robot head */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl">
          {/* Eyes */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            />
          </div>
          {/* Mouth */}
          <motion.div
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded-full"
            animate={{
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Antenna */}
          <motion.div
            className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-red-400"
            animate={{
              rotateZ: [0, 15, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 rounded-full bg-red-300 -mt-1 -ml-0.5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CuteRobot;
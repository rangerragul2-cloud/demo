import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const VisionMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const visionPoints = [
    "Bradman Technologies: Your Digital Advantage.",
    "Bradman Technologies: Code. Create. Conquer.",
    "Bradman Technologies: Amplify Your Impact.",
    "Bradman Technologies provides the end-to-end technical execution to dominate your market."
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-blue-900 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Our Vision Map
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-xl"
                >
                  <div className="text-lg md:text-xl text-gray-800 font-medium">
                    {point}
                  </div>
                </motion.div>
              </div>
              
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.3 + 0.4, duration: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                >
                  {index + 1}
                </motion.div>
                
                {index < visionPoints.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 80 } : { height: 0 }}
                    transition={{ delay: index * 0.3 + 0.6, duration: 0.5 }}
                    className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 to-transparent"
                  />
                )}
              </div>
              
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMap;
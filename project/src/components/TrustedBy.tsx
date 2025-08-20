import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TrustedBy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const clients = [
    'TechCorp', 'InnovateAI', 'GlobalTech', 'FutureWorks', 'DigitalPro',
    'SmartSolutions', 'NextGen', 'CloudFirst', 'DataDrive', 'CodeCraft'
  ];

  return (
    <section id="trusted-by" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
        >
          Trusted By <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">Industry Leaders</span>
        </motion.h2>

        <div ref={ref} className="relative">
          <motion.div
            animate={{ x: [-1000, 1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-16 items-center"
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 px-8 py-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-2xl font-bold text-gray-700 whitespace-nowrap">
                  {client}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            Join 50+ companies who trust us with their digital transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
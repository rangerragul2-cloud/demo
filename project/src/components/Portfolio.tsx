import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const portfolioItems = [
    { 
      id: 1, 
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Web Design',
      description: 'Modern E-commerce Platform'
    },
    { 
      id: 2, 
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Branding',
      description: 'Corporate Identity Design'
    },
    { 
      id: 3, 
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Mobile App',
      description: 'iOS & Android Application'
    },
    { 
      id: 4, 
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'UI/UX',
      description: 'Dashboard Interface Design'
    },
    { 
      id: 5, 
      image: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Marketing',
      description: 'Digital Campaign Materials'
    },
    { 
      id: 6, 
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Web Development',
      description: 'Corporate Website'
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
        >
          Our <span className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-gray-600 mb-16 text-lg"
        >
          Photos designed by us - Showcasing our creative excellence
        </motion.p>

        <div ref={ref} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="break-inside-avoid mb-6 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-start p-4"
                >
                  <div className="text-white">
                    <div className="text-sm font-semibold text-cyan-400 mb-1">{item.category}</div>
                    <div className="text-lg font-bold">{item.description}</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
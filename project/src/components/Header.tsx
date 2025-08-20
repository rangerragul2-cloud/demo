import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import Chatbot from './Chatbot';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    'Home', 'Services', 'About Us', 'Vision', 'Why Choose Us', 
    'Portfolio', 'Trusted By', 'Honours', 'Careers', 'Contact'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white/90 backdrop-blur-md shadow-lg'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          {/* Centered Logo with Rotation Animation */}
          <div className="flex justify-center items-center relative">
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute left-4 w-8 h-8 rounded-full bg-gradient-to-r from-blue-800 via-purple-600 to-cyan-400"
            />
            
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                textShadow: "0px 0px 8px rgba(59, 130, 246, 0.5)"
              }}
              className="text-center"
            >
              <motion.h1 
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 via-purple-600 to-cyan-400 bg-clip-text text-transparent bg-300% animate-gradient"
                style={{
                  backgroundSize: '300% 300%',
                }}
              >
                Bradman Tech
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-gray-600 mt-1 font-medium"
              >
                Innovation • Excellence • Growth
              </motion.p>
            </motion.div>

            <motion.div
              animate={{ 
                rotate: [0, -360],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute right-4 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 via-purple-600 to-blue-800"
            />
          </div>

          {/* Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-gradient-to-r from-blue-800 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.nav
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-lg shadow-2xl z-60 border-l border-gray-200"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-8">
                    <motion.h2 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xl font-bold bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent"
                    >
                      Navigation
                    </motion.h2>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 text-gray-600 hover:text-gray-800 rounded-full hover:bg-gray-100 transition-all"
                    >
                      <X size={24} />
                    </motion.button>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <motion.button
                          whileHover={{ 
                            scale: 1.02, 
                            x: 5,
                            backgroundColor: "rgba(59, 130, 246, 0.1)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => scrollToSection(item)}
                          className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 rounded-xl transition-all duration-200 font-medium"
                        >
                          {item}
                        </motion.button>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 pt-6">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg font-semibold text-gray-800 mb-4"
                    >
                      Connect With Us
                    </motion.h3>
                    <div className="flex space-x-3">
                      {socialLinks.map(({ icon: Icon, href, label }, index) => (
                        <motion.a
                          key={label}
                          href={href}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 15,
                            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                          }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                          aria-label={label}
                        >
                          <Icon size={20} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Chatbot Component */}
      <Chatbot />
    </>
  );
};

export default Header;
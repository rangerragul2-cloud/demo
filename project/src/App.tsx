import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  useEffect(() => {
    // Ensure minimum loading time for better UX
    const minLoadTime = setTimeout(() => {
      if (!showContent) {
        handleLoadingComplete();
      }
    }, 3000);

    return () => clearTimeout(minLoadTime);
  }, [showContent]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Router>
              <div className="min-h-screen bg-gray-50">
                <Header />
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                  </Routes>
                </AnimatePresence>
              </div>
            </Router>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
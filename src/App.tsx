import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TherapeuticAreas from './pages/TherapeuticAreas';
import Contact from './pages/Contact';
import { scrollToTop } from './utils/scrollToTop';

function App() {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };
  return (
    <div className="App">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <About />
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Services />
              </motion.div>
            } />
            <Route path="/therapeutic-areas" element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <TherapeuticAreas />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Contact />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
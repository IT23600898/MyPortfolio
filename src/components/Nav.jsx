import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu Links Array
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/90 backdrop-blur-md py-4 shadow-xl shadow-blue-900/20 border-b border-blue-900/30" 
          : "bg-transparent py-6"
      } text-white px-6 md:px-16 lg:px-24`}
    >
      <div className="flex justify-between items-center">
        
        {/* --- Logo --- */}
        <a href="#home" className="text-2xl font-bold tracking-wide flex items-center gap-1 group">
          <span className='text-blue-400 group-hover:text-sky-300 transition-colors'>&lt;</span>
          RK
          <span className='text-blue-400 group-hover:text-sky-300 transition-colors'>/&gt;</span>
        </a>

        {/* --- Desktop Menu --- */}
        <div className='hidden md:flex items-center space-x-8'>
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              whileHover={{ scale: 1.05, color: "#60a5fa" }}
              className="text-slate-300 font-medium hover:text-blue-400 transition-colors relative group"
            >
              {link.name}
              {/* Underline Animation */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}

          {/* Connect Me Button */}
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className='bg-gradient-to-r from-blue-700 to-sky-500 text-white px-6 py-2 rounded-full font-medium shadow-lg shadow-blue-700/30 cursor-pointer'
          >
            Connect Me
          </motion.a>
        </div>

        {/* --- Mobile Menu Toggle Button --- */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* --- Mobile Menu Dropdown (AnimatePresence) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-blue-900/30 mt-4 overflow-hidden rounded-b-2xl"
          >
            <ul className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} // Close menu on click
                    className="text-slate-300 text-lg font-medium hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  onClick={() => setIsOpen(false)}
                  className='bg-gradient-to-r from-blue-700 to-sky-500 text-white px-8 py-3 rounded-full font-medium shadow-lg'
                >
                  Connect Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar
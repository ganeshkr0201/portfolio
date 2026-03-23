import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import cvPdf from '../assets/ganeshCV.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            <a href="#hero" className="text-white flex items-center gap-2">
              <span>Ganesh<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-accent">Kumar</span></span>
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              className="flex items-center space-x-6"
            >
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-white hover:text-shadow-sm transition-colors text-sm font-medium">
                  {link.name}
                </a>
              ))}
              <a href={cvPdf} download="Ganesh_Kumar_CV.pdf" className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-white transition-all shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-3">
                <a
                  href={cvPdf}
                  download="Ganesh_Kumar_CV.pdf"
                  className="block w-full text-center px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-primary to-accent rounded-md shadow-lg"
                >
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

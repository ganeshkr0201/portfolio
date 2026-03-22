import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6 text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm self-center lg:self-start w-max"
          >
            <span className="text-sm text-gray-300 font-medium">Hello there, I'm</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Ganesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-accent">Kumar</span>.
          </h1>
          
          <h2 className="text-xl sm:text-2xl text-gray-400 font-medium">
            Backend & Generative AI Developer <br/>
            <span className="text-sm font-normal text-gray-500 uppercase tracking-widest mt-2 block">MERN Stack | LangChain Specialist</span>
          </h2>
          
          <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed text-lg">
            Backend and Generative AI Developer with expertise in MERN stack, Python, and LangChain. Specializes in building scalable backend systems and integrating AI-powered solutions to enhance user experiences. Passionate about solving complex real-world problems efficiently.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-neon to-accent text-white font-semibold hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-center">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Image/Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center h-full hidden lg:flex"
        >
          <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px] flex items-center justify-center group">
            
            {/* Elegant glowing backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon/20 to-accent/20 rounded-full blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>
            
            {/* Clean, professional border */}
            <div className="absolute inset-[-4px] bg-gradient-to-tr from-neon/50 to-accent/50 rounded-full opacity-50 transition-opacity duration-500 group-hover:opacity-100"></div>
            
            {/* Profile image container */}
            <div className="w-full h-full rounded-full bg-[#05050f] border-4 border-[#05050f] overflow-hidden relative z-10 shadow-2xl">
                <img 
                  src={profileImg} 
                  alt="Ganesh Kumar" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

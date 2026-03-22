import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-gray-100 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <Navbar />
        <main className="w-full flex-1 flex flex-col items-center flex-grow flex-shrink-0">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Services />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;

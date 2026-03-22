import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="w-full py-24 px-4 sm:px-6 lg:px-8 relative flex justify-center">
      <div className="max-w-5xl mx-auto w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Glass Card Text Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon/10 blur-3xl rounded-full"></div>
            <p className="text-gray-300 leading-relaxed mb-6 relative z-10 text-lg">
              I am a driven B.Tech Computer Science student with a deep passion for backend development and artificial intelligence. My focus lies in designing scalable systems, building robust APIs, and integrating intelligent LLM-powered applications.
            </p>
            <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
              I thrive on solving complex problems efficiently, leveraging modern frameworks in the MERN stack while experimenting with Generative AI via LangChain and Gemini API to craft intelligent, real-world solutions.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-neon" /> Education & Background
            </h3>

            <div className="relative pl-8 border-l border-white/10 space-y-8">
              {/* Item 1 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-background border-2 border-neon"></span>
                <h4 className="text-lg font-medium text-white">B.Tech in Computer Science</h4>
                <p className="text-accent text-sm mb-1">Lovely Professional University, Punjab</p>
                <p className="text-gray-400 text-sm mb-2">Aug 2023 – Present</p>
                <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/5 text-xs text-gray-300">CGPA: 8.06</div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-background border-2 border-accent"></span>
                <h4 className="text-lg font-medium text-white">Intermediate (Class 12)</h4>
                <p className="text-gray-400 text-sm mb-2">Sadar Alam Memorial Secondary School</p>
                <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/5 text-xs text-gray-300">Score: 78%</div>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-background border-2 border-white/20"></span>
                <h4 className="text-lg font-medium text-white">Matriculation (Class 10)</h4>
                <p className="text-gray-400 text-sm mb-2">Nalanda Vidya Mandir</p>
                <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/5 text-xs text-gray-300">Score: 82.6%</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

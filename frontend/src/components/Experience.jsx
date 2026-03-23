import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Code } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="w-full py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:ml-auto md:w-full md:pl-12 relative pl-8 pb-12 last:pb-0"
          >
            {/* Timeline Dot */}
            <span className="absolute left-[-9px] md:left-[-9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background"></span>
            
            <div className="glass-card p-6 md:p-8 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] group relative overflow-hidden transition-all duration-500 border border-white/5 bg-white/[0.02] hover:border-primary/40">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/20 transition-all duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    Freelance Developer
                  </h3>
                  <h4 className="text-lg text-neon font-medium flex items-center gap-2 mt-1">
                    <Briefcase size={18} /> NextDriveBihar
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 py-1 px-3 rounded-full w-fit">
                  <Calendar size={14} /> <span>Recent Project</span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Developed a comprehensive full-stack web application for a thriving cab and tour booking business. Focused on delivering a seamless user experience, scalability, and real-time performance to handle simultaneous bookings efficiently.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <Code className="text-primary mt-1 shrink-0" size={18} />
                  <p className="text-gray-300"><strong className="text-gray-200">Frontend:</strong> Built an intuitive and responsive user interface using React.</p>
                </div>
                <div className="flex gap-3">
                  <Code className="text-primary mt-1 shrink-0" size={18} />
                  <p className="text-gray-300"><strong className="text-gray-200">Backend:</strong> Designed robust backend APIs utilizing Node.js, Express, MongoDB, and Redis to ensure optimal data flow and minimal latency.</p>
                </div>
                <div className="flex gap-3">
                  <Code className="text-primary mt-1 shrink-0" size={18} />
                  <p className="text-gray-300"><strong className="text-gray-200">Authentication:</strong> Integrated secure Google OAuth 2.0 to enhance user security and streamline the standard login flow.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;

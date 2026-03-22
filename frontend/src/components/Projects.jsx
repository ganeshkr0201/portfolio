import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Harmony AI',
    date: 'Apr 2025',
    description: 'An intelligent AI-powered mental wellness chatbot designed to provide contextual and empathetic responses.',
    icon: <Bot size={24} className="text-neon" />,
    features: [
      'Integrated Gemini API using LangChain',
      'Backend APIs with Node.js & Express',
      'Chat history & session management via MongoDB',
      'Focus on contextual AI responses'
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'LangChain', 'Gemini API'],
    github: 'https://github.com/ganeshkr0201/',
  },
  {
    title: 'Blog Verse',
    date: 'Nov 2025',
    description: 'A dynamic full-stack blogging platform enabling authors to securely create, manage, and share content.',
    icon: <Globe size={24} className="text-accent" />,
    features: [
      'Secure authentication & authorization',
      'RESTful APIs with full CRUD operations',
      'Server-side rendering implementation using EJS',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'CSS'],
    github: 'https://github.com/ganeshkr0201/',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neon/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon to-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="glass-panel group relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-accent/40"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"></div>
              
              <div className="p-8 relative z-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-background/50 rounded-2xl border border-white/5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                      <Github size={22} />
                    </a>
                    {/* Add external link if available */}
                    <button className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full cursor-not-allowed opacity-50">
                      <ExternalLink size={22} />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-neon mb-4">Target: {project.date}</p>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-8 flex-grow">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-accent mt-1">•</span> {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-white/5">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-gray-400 bg-background/50 px-3 py-1 rounded-full border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

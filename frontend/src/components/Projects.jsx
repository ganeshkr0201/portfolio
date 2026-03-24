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
    github: 'https://github.com/ganeshkr0201/medGuruBackend',
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
    github: 'https://github.com/ganeshkr0201/blogVerse',
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
    <section id="projects" className="relative w-full px-4 py-24 sm:px-6 lg:px-8">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none h-1/2 bg-gradient-to-t from-neon/5 to-transparent"></div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon">Projects</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-primary to-accent"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="glass-panel group relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 border border-white/5 hover:border-primary/40 bg-white/[0.02]"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 pointer-events-none bg-gradient-to-br from-primary/5 to-neon/5 group-hover:opacity-100"></div>
              
              <div className="relative z-10 flex flex-col flex-grow p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 transition-transform duration-300 border bg-background/50 rounded-2xl border-white/5 backdrop-blur-sm group-hover:scale-110">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 transition-colors rounded-full hover:text-white hover:bg-white/5">
                      <Github size={22} />
                    </a>
                    {/* Add external link if available */}
                    <button className="p-2 text-gray-400 transition-colors rounded-full opacity-50 cursor-not-allowed hover:text-white hover:bg-white/5">
                      <ExternalLink size={22} />
                    </button>
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-gradient">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm font-medium text-neon">Target: {project.date}</p>
                
                <p className="mb-6 leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <ul className="flex-grow mb-8 space-y-2">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1 text-accent">•</span> {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-white/5">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 text-xs font-medium text-gray-400 border rounded-full bg-background/50 border-white/5">
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

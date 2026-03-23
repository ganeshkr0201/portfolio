import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Code2, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Backend Development',
    description: 'Design and build secure, scalable backend architectures and RESTful APIs using Node.js, Express, and modern databases.',
    icon: <Server size={32} className="text-primary" />,
    features: ['API Development', 'Database Optimization', 'Authentication & Security']
  },
  {
    title: 'Generative AI Solutions',
    description: 'Integrate advanced Large Language Models to build intelligent chatbots, dynamic content generators, and AI agents.',
    icon: <Cpu size={32} className="text-neon" />,
    features: ['LangChain Integration', 'Custom LLM Pipelines', 'Context-Aware Chatbots']
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using the complete MERN stack to deliver modern, responsive, and performant user experiences.',
    icon: <Code2 size={32} className="text-primary" />,
    features: ['React & Vite', 'Responsive UI/UX', 'State Management']
  },
  {
    title: 'Scalable System Design',
    description: 'Architecting containerized and cloud-ready systems designed for high availability, low latency, and robust fault tolerance.',
    icon: <ShieldCheck size={32} className="text-neon" />,
    features: ['Microservices', 'Caching with Redis', 'Docker Containerization']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  return (
    <section id="services" className="w-full py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon">Do</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 relative z-10"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass-card p-8 group relative overflow-hidden flex flex-col h-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(37,99,235,0.1)]"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-neon/20 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:border-primary/50">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-shadow-sm transition-all">{service.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10 w-full mt-auto">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-neon"></div>
                    <span className="text-gray-300 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

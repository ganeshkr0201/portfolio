import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Lightbulb, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="text-neon" size={24} />,
    skills: ['C++', 'Python', 'JavaScript']
  },
  {
    title: 'Frontend',
    icon: <Layout className="text-accent" size={24} />,
    skills: ['HTML', 'CSS', 'React', 'EJS']
  },
  {
    title: 'Backend',
    icon: <Database className="text-neon" size={24} />,
    skills: ['Node.js', 'Express.js']
  },
  {
    title: 'Database',
    icon: <Database className="text-accent" size={24} />,
    skills: ['MongoDB', 'SQL', 'Redis', 'Vector Database']
  },
  {
    title: 'Gen AI',
    icon: <Lightbulb className="text-neon" size={24} />,
    skills: ['LangChain', 'LLMs', 'RAG']
  },
  {
    title: 'Tools & Technologies',
    icon: <Wrench className="text-accent" size={24} />,
    skills: ['Git', 'GitHub', 'Docker', 'Postman']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="w-full py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-neon/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon to-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-card p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {category.icon}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon/50 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:bg-gradient-to-r group-hover:from-neon/10 group-hover:to-accent/10 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

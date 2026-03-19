import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { 
  Database, 
  Globe, 
  Cpu, 
  Code2, 
  Layers, 
  Terminal,
  BarChart3,
  Zap
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Python', icon: <Terminal />, color: 'text-blue-400' },
    { name: 'Java', icon: <Code2 />, color: 'text-red-400' },
    { name: 'React', icon: <Zap />, color: 'text-cyan-400' },
    { name: 'Node.js', icon: <Globe />, color: 'text-green-400' },
    { name: 'MongoDB', icon: <Database />, color: 'text-emerald-400' },
    { name: 'MySQL', icon: <Database />, color: 'text-blue-500' },
    { name: 'PHP', icon: <Layers />, color: 'text-indigo-400' },
    { name: 'Javascript', icon: <Terminal />, color: 'text-yellow-400' },
    { name: 'Generative AI', icon: <Brain />, color: 'text-purple-400' },
    { name: 'Machine Learning', icon: <Cpu />, color: 'text-pink-400' },
    { name: 'Data Analysis', icon: <BarChart3 />, color: 'text-orange-400' },
  ];

  // Brain icon helper since it's used twice
  function Brain() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"/></svg>;
  }

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to bring ideas to life.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                y: -10, 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(0, 242, 255, 0.5)'
              }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all cursor-default"
            >
              <div className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <span className="font-medium text-white/80 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      type: 'edu',
      title: 'B.Tech in Computer Science',
      company: 'Institute Of Aeronautical Engineering',
      date: '2024 - 2028',
      desc: 'Core CSE student with self-driven learning in Artificial Intelligence and Machine Learning.'
    },
    {
      type: 'work',
      title: 'Web Developer Intern',
      company: 'InspireLeap',
      date: 'May 2025 - Jul 2025',
      desc: 'Developed responsive websites using MERN stack.'
    },
    {
      type: 'work',
      title: 'Machine Learning Intern',
      company: 'Vaidsys Technologies',
      date: 'Dec 2025 - Jan 2026',
      desc: 'Worked on data analysis, model building, and predictive analytics projects.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A timeline of my professional experience and educational background.
          </p>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent -translate-x-1/2 hidden md:block" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-12 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Node */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-blue -translate-x-1/2 z-10 hidden md:block">
                <div className="absolute inset-0 rounded-full bg-neon-blue animate-ping opacity-50" />
              </div>

              {/* Content */}
              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="glass p-8 rounded-3xl hover:border-neon-purple/30 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/5 text-neon-blue">
                      {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                    </div>
                    <span className="text-sm font-mono text-neon-purple">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-neon-blue transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-white/60 font-medium mb-4">{item.company}</h4>
                  <p className="text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

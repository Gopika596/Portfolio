import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { User, Code, Brain } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      icon: <Brain className="text-neon-blue" size={32} />,
      title: "AI Enthusiast",
      desc: "Passionate about Generative AI and Machine Learning, exploring how intelligent systems can solve complex real-world problems."
    },
    {
      icon: <Code className="text-neon-purple" size={32} />,
      title: "Full Stack Developer",
      desc: "Building scalable web applications with modern technologies like React, Node.js, and various database systems."
    },
    {
      icon: <User className="text-white" size={32} />,
      title: "Problem Solver",
      desc: "Dedicated to creating innovative solutions through clean code and efficient algorithms."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-blue to-neon-purple" />
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                I am a dedicated developer with a deep passion for the intersection of Artificial Intelligence and Web Development. My journey in tech is driven by a curiosity to understand how things work and a desire to build tools that make a difference.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Whether it's training a machine learning model or architecting a complex frontend, I thrive on challenges that push my creative and technical boundaries. My goal is to create seamless, intelligent digital experiences that feel like the future.
              </p>
            </div>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass p-6 rounded-2xl flex gap-6 items-start group transition-all"
              >
                <div className="p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-white/60">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

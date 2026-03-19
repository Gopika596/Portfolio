import React from 'react';
import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, ChevronDown, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full glass text-xs font-mono text-neon-blue mb-6 tracking-widest uppercase">
            Welcome to the future
          </span>
          
          <div className="flex flex-col items-center justify-center gap-10 mb-8">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue blur-md shadow-[0_0_30px_rgba(0,242,255,0.5)]"
              />
              <div className="absolute inset-0 rounded-full bg-dark-bg p-1.5">
                <img
                  src="https://res.cloudinary.com/difogadm8/image/upload/v1773906525/facepic_o1lvtw.jpg"
                  alt="Singamsetty Gopika Sri"
                  className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-center">
              I'm <span className="text-gradient">Singamsetty Gopika Sri</span>
            </h1>
          </div>

          <div className="text-xl md:text-3xl font-light text-white/60 mb-10 h-12">
            <Typewriter
              words={['AI Developer', 'Web Developer', 'Software Engineer']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,255,0.3)]"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.a>
             <motion.a
              href="https://res.cloudinary.com/difogadm8/image/upload/v1773930718/FAANGPath_Simple_Template_1_jnt3kx.jpg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,255,0.3)]"
            >
              View Resume <ExternalLink size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;

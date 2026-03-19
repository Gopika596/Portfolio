import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto glass rounded-[40px] overflow-hidden p-12 md:p-16 text-center bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Let's <span className="text-gradient">Connect</span></h2>
            
            <div className="space-y-4 mb-12">
              <p className="text-xl md:text-2xl text-white font-medium">
                I'm open to internships and opportunities in AI & Web Development.
              </p>
              <p className="text-white/60 text-lg">
                Feel free to reach out!
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <a href="mailto:gopikasri1237@gmail.com" className="flex flex-col items-center gap-3 text-white/70 hover:text-neon-blue transition-all group">
                <div className="p-4 rounded-2xl glass group-hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all">
                  <Mail size={24} />
                </div>
                <span className="text-sm font-mono break-all">gopikasri1237@gmail.com</span>
              </a>
              
              <a href="https://www.linkedin.com/in/gopika-sri-singamsetty-346a04323/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 text-white/70 hover:text-neon-blue transition-all group">
                <div className="p-4 rounded-2xl glass group-hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all">
                  <Linkedin size={24} />
                </div>
                <span className="text-sm font-mono">LinkedIn Profile</span>
              </a>
              
              <a href="https://github.com/Gopika596" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 text-white/70 hover:text-neon-blue transition-all group">
                <div className="p-4 rounded-2xl glass group-hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all">
                  <Github size={24} />
                </div>
                <span className="text-sm font-mono">GitHub Profile</span>
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest">
                Based in India • Available Worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

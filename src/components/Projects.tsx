import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "LUXE Salon Web App",
      desc: "A bespoke digital experience for LUXE Salon, integrating a seamless appointment scheduler, luxury service catalog, and personalized stylist portfolios.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773751297/luxe_hywbvs.jpg",
      live: "https://90bgeu-my-site-0fd27ku0-hellogopika21.wix-vibe.com/"
    },
    {
      title: "LingoMaster",
      desc: "AI-powered language learning platform using Generative AI for personalized conversation practice and real-time feedback.",
      tech: ["Next.js", "OpenAI API", "PostgreSQL", "Framer Motion"],
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773751215/WhatsApp_Image_2026-03-17_at_6.06.19_PM_veendp.jpg",
      live: "https://res.cloudinary.com/difogadm8/video/upload/v1773754154/LingoMaster_1_iyugbf.mp4"
    },
    {
      title: "ML Predictive Maintenance",
      desc: "ML model output showing dataset preview, RUL calculation, 85% accuracy, and key feature importance.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773898162/ChatGPT_Image_Mar_19_2026_10_58_57_AM_fsl5mm.png",
      live: "https://drive.google.com/drive/folders/1ENuvXh2JOpUKVgmR4r725Mo4wupWsuN2"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in full-stack development and AI integration.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15 }}
              className="glass rounded-3xl overflow-hidden group border border-white/5 hover:border-neon-blue/30 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-6 line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 text-neon-purple border border-neon-purple/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,242,255,0.2)] hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] transition-all"
                  >
                    <ExternalLink size={18} /> View Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

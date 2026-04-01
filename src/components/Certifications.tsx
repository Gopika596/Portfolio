import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Award } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "Java Programming",
      issuer: "e-DAM, IARE",
      date: "Mar 2025",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773901487/aa8b00a6-1_xidsc4.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773901487/aa8b00a6-1_xidsc4.jpg"
    },
    {
      title: "Web Development Course Completion",
      issuer: "InspireLeap",
      date: "Jun 2025",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773901450/7bdfbddc-1_zekzq3.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773901450/7bdfbddc-1_zekzq3.jpg"
    },
    {
      title: "Internship Completion Certificate",
      issuer: "InsipreLeap",
      date: "Jul 2025",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773901525/fe049fd4-1_hhp177.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773901525/fe049fd4-1_hhp177.jpg"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte, Forage",
      date: "Aug 2025",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773901106/deloitte_data_analytics_certificate_jesav6.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773901106/deloitte_data_analytics_certificate_jesav6.jpg"
    },
    {
      title: "Generative AI",
      issuer: "Outskill",
      date: "Sep 2025",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773900590/outskillgenai_bvf4j8.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773900590/outskillgenai_bvf4j8.jpg"
    },
    {
      title: "Prompt to Prototype",
      issuer: "Google for Startup, Scaler",
      date: "Dec 2025",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773901515/ee038db0-1_rzrupw.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773901515/ee038db0-1_rzrupw.jpg"
    },
    {
      title: "Hackathon AI/ML",
      issuer: "Techgyan, BITS Pilani Hyderabad",
      date: "Jan 2026",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773900225/bits_hackathon_xunp4a.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773900225/bits_hackathon_xunp4a.jpg"
    },
    {
      title: "AI/ML Workshop",
      issuer: "Techgyan, BITS Pilani Hyderabad",
      date: "Jan 2026",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773900481/bits_techgyan_aiml_w8aqi1.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773900481/bits_techgyan_aiml_w8aqi1.jpg"
    },
    {
      title: "Salesforce",
      issuer: "Vaidsys Technologies",
      date: "Jan 2026",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773901459/8f777041-1_f6yk14.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773901459/8f777041-1_f6yk14.jpg"
    },
    {
      title: "Machine Learning",
      issuer: "Vaidsys Technologies",
      date: "Jan 2026",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773901468/16f83669-1_byc4xr.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773901468/16f83669-1_byc4xr.jpg"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Internshala Trainings",
      date: "Mar 2026",
      image: "https://res.cloudinary.com/difogadm8/image/upload/v1773901501/b103ccfc-1_hknr2c.jpg",
      link: "https://res.cloudinary.com/difogadm8/image/upload/v1773901501/b103ccfc-1_hknr2c.jpg"
    }
    {
      title: "Internship and Job Preparation",
      issuer: "Internshala Trainings",
      date: "April 2026",
      image: "https://res.cloudinary.com/difogadm8/image/upload/q_auto/f_auto/v1775048000/Screenshot_2026-04-01_181822_nj7nav.png",
      link: "https://res.cloudinary.com/difogadm8/image/upload/q_auto/f_auto/v1775048000/Screenshot_2026-04-01_181822_nj7nav.png"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            My <span className="text-gradient">Certifications</span>
          </motion.h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A collection of my professional certifications and achievements.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative block glass rounded-[32px] overflow-hidden border border-white/5 hover:border-neon-blue/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4 rounded-full bg-neon-blue/20 backdrop-blur-md border border-neon-blue/30 text-neon-blue">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Award size={16} className="text-neon-purple" />
                  <span className="text-xs font-mono text-neon-purple uppercase tracking-widest">{cert.issuer}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                  {cert.title}
                </h3>
                <p className="text-white/40 text-sm font-mono">{cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

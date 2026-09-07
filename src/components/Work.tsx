import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
}

export const Work: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const projects: Project[] = [
    {
      id: 'pixzen',
      title: 'Pixzen',
      category: 'Fintech & Design System',
      year: '2024',
      description: 'Ultra-low latency institutional trading platform crafted with cutting-edge visual hierarchy and real-time telemetry.',
      image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781522720269-Pixzen.webp',
    },
    {
      id: 'wander',
      title: 'Wander',
      category: 'Luxury Travel & Hospitality',
      year: '2024',
      description: 'Immersive exploration portal combining spatial audio, interactive maps, and frictionless booking experiences.',
      image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781631791578-Wander_Hero.webp',
    },
    {
      id: 'agentify',
      title: 'Agentify',
      category: 'Autonomous AI Ecosystem',
      year: '2025',
      description: 'Next-generation orchestration dashboard enabling enterprise teams to monitor autonomous AI workflows at scale.',
      image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781671943344-Agentify_Hero.webp',
    },
    {
      id: 'future',
      title: 'Future',
      category: 'Spatial Computing & Web3',
      year: '2025',
      description: 'Decentralized digital protocol web portal featuring real-time WebGL canvas interactions and dynamic shaders.',
      image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781679053418-Future_Carousel.webp',
    },
    {
      id: 'genova',
      title: 'Genova',
      category: 'Biotech & Deep Tech',
      year: '2024',
      description: 'Interactive computational biology platform translating complex genetic sequences into intuitive visual artifacts.',
      image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781670271708-Genova_Hero.webp',
    },
  ];

  return (
    <section id="work" className="relative py-32 bg-[#0c1128] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
                Featured Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight text-white uppercase"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Works
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300 group py-2"
            >
              <span className="uppercase tracking-widest text-xs">View All Projects</span>
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Expanding Flex Gallery Accordion */}
        {/* Desktop: Horizontal Flex | Mobile: Vertical Accordion */}
        <div className="flex flex-col md:flex-row h-auto md:h-[500px] gap-4 w-full">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                animate={{
                  flex: isActive ? 4 : 0.8,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group border transition-colors duration-500 ${
                  isActive
                    ? 'border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
                    : 'border-white/10 hover:border-white/20'
                } min-h-[140px] md:min-h-full`}
              >
                {/* Background Image with Micro-Interaction (Zoom on hover) */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} portfolio case study preview`}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dynamic Dark Overlays */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive ? 'bg-black/50' : 'bg-black/75 group-hover:bg-black/60'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full h-full p-6 sm:p-8 flex flex-col justify-between">
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/70 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div>
                    {/* Collapsed view indicator text on desktop */}
                    {!isActive && (
                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors truncate">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 truncate">
                          {project.category.split('&')[0]}
                        </p>
                      </div>
                    )}

                    {/* Active Expanded Project View */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="flex flex-col gap-3"
                        >
                          <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
                            {project.category}
                          </span>
                          <h3 className="text-3xl sm:text-4xl font-black tracking-tighter text-white uppercase">
                            {project.title}
                          </h3>
                          <p className="text-sm text-gray-300 font-light max-w-lg leading-relaxed line-clamp-2 sm:line-clamp-3">
                            {project.description}
                          </p>
                          <div className="pt-2">
                            <a
                              href="#contact"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            >
                              <span>Explore Project</span>
                              <ExternalLink className="w-3.5 h-3.5 text-black" />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mobile always visible title if inactive */}
                    {!isActive && (
                      <div className="md:hidden">
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          {project.category}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

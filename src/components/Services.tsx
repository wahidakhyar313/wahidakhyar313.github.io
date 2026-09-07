import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layout, Palette, Server, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Mobile App Development',
      category: 'Android & Cross-Platform',
      description: 'Native Android architecture in Kotlin & Java, plus multi-platform Flutter & React Native applications designed for speed, fluid 60fps animations, and offline capability.',
      icon: Smartphone,
      color: 'from-blue-400 to-cyan-400',
      badge: 'Core Specialty',
      deliverables: ['Native Android (Kotlin/Java)', 'Flutter & React Native', 'Offline-First SQLite/Room', 'Play Store Deployment'],
    },
    {
      title: 'Frontend Web Engineering',
      category: 'Modern Web & React',
      description: 'Building high-performance, responsive web interfaces with React, TypeScript, and modern CSS. Pixel-perfect implementations with dynamic motion and interactive UI components.',
      icon: Layout,
      color: 'from-purple-400 to-pink-500',
      badge: 'Interactive Web',
      deliverables: ['React & Next.js Ecosystems', 'Tailwind CSS Systems', 'Smooth Framer Animations', 'Cross-Device Responsiveness'],
    },
    {
      title: 'UI/UX & Interaction Design',
      category: 'User Experience & Systems',
      description: 'Human-centric user journeys, high-fidelity wireframing, Figma design systems, interactive prototypes, and refined micro-interactions that elevate your product brand.',
      icon: Palette,
      color: 'from-sky-400 to-indigo-500',
      badge: 'Design Craft',
      deliverables: ['Figma Design Systems', 'Interactive Prototyping', 'User Flow & Wireframes', 'Brand Asset Positioning'],
    },
    {
      title: 'Backend & Cloud Integration',
      category: 'APIs & Data Services',
      description: 'Architecting robust RESTful APIs, Firebase real-time synchronizations, NodeJS / PHP services, and secure relational databases (MySQL) powering your mobile and web apps.',
      icon: Server,
      color: 'from-indigo-400 to-purple-600',
      badge: 'Full-Stack',
      deliverables: ['REST API Development', 'Firebase Authentication & DB', 'MySQL & Database Modeling', 'Node.js & PHP Microservices'],
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-[#0c1128] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
              Our Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight text-white uppercase"
          >
            Services Built Specifically{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              for your Business
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg font-light text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            We eliminate generic design templates. Every touchpoint is engineered from ground zero to elevate your brand prestige and drive measurable outcomes.
          </motion.p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 sm:p-10 lg:p-12 overflow-hidden hover:border-white/25 hover:bg-white/[0.07] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Quarter-circle background in the top-right corner with icon */}
                <div className="absolute top-0 right-0 w-28 h-28 sm:w-32 sm:h-32 rounded-bl-[100px] bg-gradient-to-bl from-white/10 to-transparent border-l border-b border-white/10 flex items-start justify-end p-5 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="pr-16 sm:pr-20 mb-8">
                  <div className="inline-block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    {service.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-light text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="border-t border-white/10 pt-6 mt-auto">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-medium text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#00f0ff] transition-colors duration-300"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

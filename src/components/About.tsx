import React from 'react';
import { motion } from 'framer-motion';
import { Award, Layers, Flame, Sparkles, Download, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { value: '06+', label: 'Years Experience', icon: Flame },
    { value: '50+', label: 'Completed Projects', icon: CheckCircle2 },
    { value: '100%', label: 'Quality Delivery', icon: Award },
    { value: '15+', label: 'Tech Frameworks', icon: Layers },
  ];

  return (
    <section id="about" className="relative py-32 bg-[#0c1128] overflow-hidden">
      {/* Background Detail: Center-positioned absolute blurred purple circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Bold Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#b026ff]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#b026ff]">
                About Wahid Ahyaruddin
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white uppercase">
              Design is not just what it looks like.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-500 bg-clip-text text-transparent">
                It's how it feels & performs.
              </span>
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Mobile & Frontend Engineering Manifesto
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/assets/pdf/cvwahid.pdf"
                download="cvwahid.pdf"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.25)] group"
              >
                <Download className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform duration-300" />
                <span>Download Resume CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-widest border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Paragraphs + Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-base sm:text-lg font-light text-gray-300 leading-relaxed">
              I am a Mobile & Frontend Developer with extensive knowledge and over 6 years of experience building high-quality digital products. Based in Bandung, Indonesia, I bridge intuitive UI/UX design with robust software architecture.
            </p>

            <p className="text-sm sm:text-base font-light text-gray-400 leading-relaxed">
              With deep foundations in Android engineering (Kotlin, Java), cross-platform mobile frameworks (Flutter, React Native), and modern web stacks (React, TypeScript), I deliver fluid, maintainable, and human-centric software. Every interaction is engineered with precision.
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-[#00f0ff] transition-colors mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-gray-400 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

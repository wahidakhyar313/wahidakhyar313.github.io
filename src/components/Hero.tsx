import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Compass, Download, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  // Responsive scroll-driven circle clipPath from 0 to 350px of window scroll
  const clipPercent = useTransform(scrollY, [0, 320], [0, 140]);
  const clipPath = useTransform(clipPercent, (v) => `circle(${v}% at 50% 50%)`);

  // Subtle zoom on scroll
  const scale = useTransform(scrollY, [0, 500], [1, 1.12]);

  // Indicator fades out immediately on first scroll
  const indicatorOpacity = useTransform(scrollY, [0, 80], [1, 0]);

  // Responsive text cross-fade synchronized with dark-to-light mask
  const baseTextOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const topTextOpacity = useTransform(scrollY, [80, 240], [0, 1]);

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen w-full bg-[#0c1128] overflow-hidden flex items-center justify-center">
      {/* BASE LAYER: Dark Blueprint/Sketch + "Imagine the Future" */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        {/* Background Image */}
        <motion.div
          style={{ scale }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_outline_fzg37d.jpg"
            alt="Architectural sketch outline of futuristic city skyline"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Dark Overlays for moody base contrast */}
          <div className="absolute inset-0 bg-[#0c1128]/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128] via-transparent to-[#0c1128]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1128]/90 via-transparent to-[#0c1128]/90" />
        </motion.div>

        {/* Base Layer Content */}
        <motion.div
          style={{ opacity: baseTextOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
              Wahid Ahyaruddin · Mobile & Web Technologist
            </span>
          </div>

          {/* Single H1 on the page as required */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.05] text-white uppercase mb-6 select-none">
            Imagine <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(0,240,255,0.3)]">
              The Future
            </span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-8">
            Mobile developer and creative frontend engineer crafting high-performance Android applications, cross-platform experiences, and interactive web ecosystems.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#work"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2 group"
            >
              <span>Explore Projects</span>
              <Compass className="w-4 h-4 text-black group-hover:rotate-45 transition-transform duration-300" />
            </a>
            <a
              href="/assets/pdf/cvwahid.pdf"
              download="cvwahid.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-widest border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group"
            >
              <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform duration-300" />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* TOP LAYER: Bright Realistic City + "Build the Reality" with Clip-Path Reveal */}
      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-20"
      >
        {/* Background Image */}
        <motion.div
          style={{ scale }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_iglhwn.jpg"
            alt="Vibrant futuristic city skyline glowing at night"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Dynamic luminous overlay for bright realistic reveal */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1128] via-transparent to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1128]/60 via-transparent to-[#0c1128]/60" />
        </motion.div>

        {/* Top Layer Content */}
        <motion.div
          style={{ opacity: topTextOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(176,38,255,0.3)]">
            <Sparkles className="w-3.5 h-3.5 text-[#b026ff]" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-200">
              Android · Flutter · React · UI/UX
            </span>
          </div>

          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.05] text-white uppercase mb-6 select-none">
            Build <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(176,38,255,0.5)]">
              The Reality
            </span>
          </div>

          <p className="max-w-2xl text-base sm:text-lg md:text-xl font-light text-gray-200 leading-relaxed mb-8 drop-shadow-md">
            From fluid 60fps mobile applications to full-scale web platforms. Delivering clean architecture, responsive components, and polished interactive animations.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/628112321354?text=Halo%20Wahid,%20saya%20tertarik%20untuk%20bekerjasama%20dalam%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(176,38,255,0.4)] flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="/assets/pdf/cvwahid.pdf"
              download="cvwahid.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-widest border border-white/20 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group"
            >
              <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform duration-300" />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Clickable Scroll Indicator Chevron at bottom center */}
      <motion.button
        type="button"
        onClick={handleScrollClick}
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer group focus:outline-none"
        aria-label="Scroll to reveal bright reality layer"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
          Scroll To Reveal
        </span>
        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm animate-bounce-slow group-hover:border-white/40 group-hover:bg-white/10 transition-all">
          <ChevronDown className="w-4 h-4 text-white" />
        </div>
      </motion.button>
    </section>
  );
};

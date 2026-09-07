import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  // Specification: As the user scrolls [0, 50] pixels, background opacity transitions from 0.02 to 0.08 and backdrop-filter blur increases from 8px to 24px
  const bgOpacity = useTransform(scrollY, [0, 50], [0.02, 0.08]);
  const blurAmount = useTransform(scrollY, [0, 50], [8, 24]);
  const borderColor = useTransform(scrollY, [0, 50], ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.2)']);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
      <motion.nav
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(255, 255, 255, ${v})`),
          backdropFilter: useTransform(blurAmount, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(blurAmount, (v) => `blur(${v}px)`),
          borderColor: borderColor,
        }}
        className={`w-full max-w-5xl border transition-[border-radius] duration-300 ${
          isOpen ? 'rounded-3xl' : 'rounded-full'
        } shadow-2xl shadow-black/40 px-6 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between`}
      >
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Wahid Ahyaruddin Homepage"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center text-white font-black text-lg shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform duration-300">
              W
            </div>
            <span className="font-black text-xl tracking-tighter text-white uppercase flex items-center gap-1.5">
              WAHID
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            </span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-full bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 py-1 group"
            >
              {link.name}
              {/* Expanding underline hover micro-interaction */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/assets/pdf/cvwahid.pdf"
            download="cvwahid.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gray-200 hover:text-white px-4 py-2 rounded-full border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
          >
            <Download className="w-3.5 h-3.5 text-[#00f0ff] group-hover:translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>
          <a
            href="https://wa.me/628112321354?text=Halo%20Wahid,%20saya%20tertarik%20untuk%20bekerjasama%20dalam%20proyek."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-[0_0_12px_rgba(255,255,255,0.15)] group"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col gap-4 pt-6 pb-2 border-t border-white/10 mt-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-white transition-colors py-1 flex items-center justify-between"
              >
                {link.name}
                <ArrowUpRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="/assets/pdf/cvwahid.pdf"
                download="cvwahid.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-center bg-white/10 text-white font-semibold text-xs uppercase tracking-widest py-3 rounded-full hover:bg-white/15 border border-white/15 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>Download Resume CV</span>
              </a>
              <a
                href="https://wa.me/628112321354?text=Halo%20Wahid,%20saya%20tertarik%20untuk%20bekerjasama%20dalam%20proyek."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="text-center bg-white text-black font-semibold text-xs uppercase tracking-widest py-3 rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
};

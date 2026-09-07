import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Sparkles, Phone, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-[#0c1128] border-t border-white/10 pt-32 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Massive Bold CTA Headline */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
              Have a Project in Mind?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[1.05] text-white uppercase mb-10"
          >
            Let's build <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(0,240,255,0.3)]">
              Something Epic.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* WhatsApp Direct Chat Button */}
            <a
              href="https://wa.me/628112321354?text=Halo%20Wahid,%20saya%20tertarik%20untuk%20bekerjasama%20dalam%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(16,185,129,0.35)] group"
            >
              <Phone className="w-4 h-4 fill-black text-black" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Email Direct Contact Button */}
            <a
              href="mailto:wahidahyaruddin@gmail.com?subject=Project%20Inquiry%20-%20Wahid%20Ahyaruddin"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-widest border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95 group"
            >
              <Mail className="w-4 h-4 text-[#00f0ff]" />
              <span>Email</span>
            </a>

            {/* Download Resume CV */}
            <a
              href="/assets/pdf/cvwahid.pdf"
              download="cvwahid.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-medium text-xs uppercase tracking-widest border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
            >
              <Download className="w-4 h-4 text-gray-400 group-hover:text-white" />
              <span>Download CV</span>
            </a>
          </motion.div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center text-white font-black text-sm shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                W
              </div>
              <span className="font-black text-xl tracking-tighter text-white uppercase">
                WAHID
              </span>
            </div>
            <p className="text-sm font-light text-gray-400 leading-relaxed">
              Wahid Ahyaruddin — Mobile & Frontend Developer. Designing fluid native Android experiences, cross-platform apps, and modern interactive web products.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {[
                {
                  label: 'GitHub',
                  href: 'https://github.com/wahidakhyar313',
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/wahid-ahyaruddin-a947411b9/',
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
                {
                  label: 'Instagram',
                  href: 'https://www.instagram.com/wahidahyaruddin/',
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  label: 'Twitter',
                  href: 'https://twitter.com',
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Capabilities', href: '#services' },
                { name: 'Selected Works', href: '#work' },
                { name: 'About Wahid', href: '#about' },
                { name: 'Download CV', href: '/assets/pdf/cvwahid.pdf' },
                { name: 'Direct Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative inline-block text-sm font-light text-gray-400 hover:text-white transition-colors duration-300 group py-1"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Core Specialties
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Android (Kotlin & Java)' },
                { name: 'Flutter & React Native' },
                { name: 'React & TypeScript' },
                { name: 'UI/UX & Prototyping' },
                { name: 'Firebase & Cloud APIs' },
              ].map((item) => (
                <li key={item.name} className="text-sm font-light text-gray-400">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Location & Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm font-light text-gray-400">
              <p>Pasir Kaliki Reuma No. 24</p>
              <p>Bandung, West Java 40133</p>
              <a href="mailto:wahidahyaruddin@gmail.com" className="mt-1 text-white hover:text-[#00f0ff] transition-colors font-medium">
                wahidahyaruddin@gmail.com
              </a>
              <a href="https://wa.me/628112321354" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">
                +62 811-2321-354 (WhatsApp)
              </a>
              <p className="text-xs text-gray-500 mt-0.5">GMT+7 (Western Indonesia Time)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
          <div>
            © {new Date().getFullYear()} Wahid Ahyaruddin. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-gray-300 transition-colors">
              Portfolio
            </a>
            <span className="inline-block w-1 h-1 rounded-full bg-gray-700" />
            <a href="/assets/pdf/cvwahid.pdf" download="cvwahid.pdf" className="hover:text-gray-300 transition-colors">
              Resume CV
            </a>
            <span className="inline-block w-1 h-1 rounded-full bg-gray-700" />
            <a href="mailto:wahidahyaruddin@gmail.com" className="hover:text-gray-300 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code2, Layers, Globe2, Terminal, Server, Flame, Database, CreditCard, ShoppingBag, Sparkles } from 'lucide-react';

export const Clients: React.FC = () => {
  const clients = [
    { name: 'Android OS', icon: Smartphone },
    { name: 'Kotlin', icon: Code2 },
    { name: 'Flutter', icon: Layers },
    { name: 'React / Next', icon: Globe2 },
    { name: 'TypeScript', icon: Terminal },
    { name: 'Node.js', icon: Server },
    { name: 'Firebase', icon: Flame },
    { name: 'MySQL / SQL', icon: Database },
    { name: 'Stripe API', icon: CreditCard },
    { name: 'Shopify', icon: ShoppingBag },
  ];

  // Duplicate for seamless infinite loop ticker (-50% translation)
  const tickerItems = [...clients, ...clients, ...clients];

  return (
    <section className="relative py-24 bg-[#0c1128] overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <span className="text-sm font-medium text-gray-400">
            Powered by modern mobile frameworks, cloud services & enterprise ecosystems
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 shadow-[0_0_10px_rgba(0,240,255,0.1)]">
            <Sparkles className="w-3 h-3 text-[#00f0ff]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00f0ff]">
              Tech Stack
            </span>
          </div>
        </motion.div>
      </div>

      {/* Infinite Ticker Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0c1128] via-[#0c1128]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0c1128] via-[#0c1128]/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-12 sm:gap-16 whitespace-nowrap will-change-transform"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {tickerItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group cursor-default select-none"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-[#00f0ff] group-hover:border-white/20 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg tracking-tight uppercase group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

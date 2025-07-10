'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    { name: 'Jane D.', quote: 'This futuristic UI is amazing!' },
    { name: 'Alex P.', quote: 'Absolutely loved the design and experience.' },
    { name: 'Mira S.', quote: 'Visually stunning and smooth animations!' },
  ];

  const neonColors = ['cyan', 'purple', 'blue'];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-[var(--background-dark)]">
      <motion.h2
        className="text-4xl font-bold text-center text-[var(--neon-purple)] glow-purple mb-12 font-orbitron"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Testimonials
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className={`
              p-6 rounded-xl 
              bg-[#111] 
              text-[var(--neon-${neonColors[index]})] 
              border border-[var(--neon-${neonColors[index]})] 
              glow-${neonColors[index]} 
              transition-transform duration-300 hover:scale-105
            `}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            
            <p className="mb-4 text-sm font-light">&quot;{t.quote}&quot;</p>

            <span className="text-xs font-bold uppercase tracking-wide">
              — {t.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

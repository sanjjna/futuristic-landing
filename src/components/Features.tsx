'use client';

import { motion } from 'framer-motion';

const features = [
  { text: 'Responsive Layouts', color: 'cyan' },
  { text: 'Framer Motion Animations', color: 'purple' },
  { text: 'Orbitron Font Styling', color: 'blue' },
  { text: 'Dark Mode UI', color: 'green' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-[var(--background-dark)]">
      <motion.h2
        className="text-4xl text-center mb-12 font-orbitron glow-purple text-[var(--neon-purple)]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Features
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`
              p-6 rounded-xl border 
              border-[var(--neon-${feature.color})] 
              glow-${feature.color} 
              text-[var(--neon-${feature.color})]
              font-orbitron text-lg font-semibold bg-[#111111] transition duration-300
              hover:scale-105
            `}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {feature.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

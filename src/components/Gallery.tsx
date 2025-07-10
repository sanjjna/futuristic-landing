
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = Array.from({ length: 9 }, (_, i) => `/gallery/g${i + 1}.jpg`);

const neonColors = [
  'cyan', 'purple', 'blue',
  'green', 'pink', 'cyan',
  'purple', 'blue', 'green',
];

export default function Gallery() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-[var(--background-dark)]">
      <motion.h2
        className="text-4xl font-bold text-center text-[var(--neon-purple)] glow-purple mb-12 font-orbitron"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Gallery
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className={`
              overflow-hidden rounded-xl 
              border border-[var(--neon-${neonColors[idx]})] 
              glow-${neonColors[idx]} 
              bg-[#111] 
              transition-transform duration-300 hover:scale-105
            `}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

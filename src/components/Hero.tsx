'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[var(--background-dark)] text-[var(--neon-cyan)] flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-orbitron font-bold glow-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Futuristic Designs
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-5xl font-orbitron font-semibold glow-purple mt-6"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        Next-Gen User Interfaces
      </motion.h2>

      <motion.h3
        className="text-xl md:text-2xl font-orbitron glow-blue mt-4"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        Powered by innovation, built for the future.
      </motion.h3>

      <motion.p
        className="text-lg mt-6 max-w-xl text-[var(--foreground-light)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Dive into a visually immersive experience powered by neon lights and glassmorphism.
      </motion.p>
    </section>
  );
}

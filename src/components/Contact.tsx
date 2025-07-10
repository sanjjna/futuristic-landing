'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto bg-[var(--background-dark)]">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-[var(--neon-purple)] glow-purple mb-12 font-orbitron"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto space-y-5"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-md bg-[#111] text-white border border-[var(--neon-purple)] glow-purple focus:outline-none focus:ring-2 focus:ring-[var(--neon-purple)] transition-all"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-md bg-[#111] text-white border border-[var(--neon-purple)] glow-purple focus:outline-none focus:ring-2 focus:ring-[var(--neon-purple)] transition-all"
        />
        <textarea
          rows={5}
          placeholder="Message"
          className="w-full p-3 rounded-md bg-[#111] text-white border border-[var(--neon-purple)] glow-purple focus:outline-none focus:ring-2 focus:ring-[var(--neon-purple)] transition-all"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 rounded-md border border-[var(--neon-purple)] text-[var(--neon-purple)] hover:bg-[var(--neon-purple)] hover:text-black glow-purple transition-all duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}

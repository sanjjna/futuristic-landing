'use client';

import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', color: 'cyan' },
  { label: 'Features', color: 'purple' },
  { label: 'Gallery', color: 'blue' },
  { label: 'Testimonials', color: 'green' },
  { label: 'Pricing', color: 'pink' },
  { label: 'Contact', color: 'cyan' },
];

export default function Navbar() {
  return (
    <motion.nav
      className="w-full px-6 py-4 fixed top-0 left-0 z-50 backdrop-blur-md border-b border-[var(--neon-cyan)]"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center font-orbitron">
        <h1 className="text-2xl font-bold text-[var(--neon-pink)] glow-pink">NEON UI</h1>

        <ul className="hidden md:flex gap-8 text-sm">
          {navItems.map(({ label, color }) => (
            <motion.li
              key={label}
              whileHover={{ scale: 1.15 }}
              className={`cursor-pointer glow-${color} text-[var(--neon-${color})] hover:text-white transition duration-300`}
            >
              <a href={`#${label.toLowerCase()}`}>{label}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

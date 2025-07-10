'use client';

import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      title: 'Basic',
      price: '$19',
      features: ['1 User', 'Basic Support'],
      color: 'var(--neon-blue)',
      glow: 'glow-blue',
    },
    {
      title: 'Pro',
      price: '$49',
      features: ['Up to 5 Users', 'Priority Support'],
      color: 'var(--neon-purple)',
      glow: 'glow-purple',
    },
    {
      title: 'Enterprise',
      price: '$99',
      features: ['Unlimited Users', '24/7 Support'],
      color: 'var(--neon-cyan)',
      glow: 'glow-cyan',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-[var(--background-dark)]">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-[var(--neon-cyan)] mb-16 glow-cyan font-orbitron"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Pricing
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-xl border backdrop-blur-md bg-[#0c0c0c]/70 text-white ${plan.glow}`}
            style={{ borderColor: plan.color }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-bold mb-4 font-orbitron"
              style={{ color: plan.color }}
            >
              {plan.title}
            </h3>
            <p
              className="text-4xl font-extrabold mb-6"
              style={{ color: plan.color }}
            >
              {plan.price}
            </p>
            <ul className="text-sm space-y-2 text-gray-300">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';

export default function Particles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const count = 50;
    const temp = [];

    for (let i = 0; i < count; i++) {
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 5;
      const delay = Math.random() * 20;
      const top = Math.random() * 100;

      temp.push({ id: i, size, left, duration, delay, top });
    }

    setParticles(temp);
  }, []);

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

"use client";
import { useEffect, useState } from 'react'

type Particle = {
  id: number;
  size: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
};

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]); // ✅ FIXED

  useEffect(() => {
    const temp: Particle[] = [];

    for (let i = 0; i < 30; i++) {
      temp.push({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 2,
      });
    }

    setParticles(temp);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {particles.map(p => (
        <span
          key={p.id}
          className="absolute rounded-full bg-cyan-400 opacity-30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface SwarmParticle {
  id: number;
  size: number;
  color: string;
  springConfig: { stiffness: number; damping: number; mass: number };
  offsetX: number;
  offsetY: number;
}

export function FloatingParticles() {
  const mouseX = useMotionValue(-100); // Start off-screen
  const mouseY = useMotionValue(-100);

  const [swarm, setSwarm] = useState<SwarmParticle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    // 15 particles for the "Tail"
    const newSwarm = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1, // 1-4px
      color: i % 2 === 0 ? "rgba(255, 107, 53, 0.8)" : "rgba(157, 78, 221, 0.8)", // Orange/Purple
      // Increasing mass/damping per index creates the "trail" lag
      springConfig: {
        stiffness: 150 - i * 5, // Less stiff at the end
        damping: 15 + i * 2,    // More damping at the end (drag)
        mass: 1 + i * 0.1       // Heavier at the end
      },
      offsetX: (Math.random() - 0.5) * 40, // Local spread
      offsetY: (Math.random() - 0.5) * 40
    }));
    setSwarm(newSwarm);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[50]">
      {swarm.map((p) => (
        <SwarmParticleItem key={p.id} particle={p} mouseX={mouseX} mouseY={mouseY} />
      ))}
      {/* Ambient background dust (subtle, separate from swarm) */}
      <BackgroundDust />
    </div>
  );
}

function SwarmParticleItem({ particle, mouseX, mouseY }: { particle: SwarmParticle, mouseX: any, mouseY: any }) {
  const springX = useSpring(mouseX, particle.springConfig);
  const springY = useSpring(mouseY, particle.springConfig);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        x: springX,
        y: springY,
        width: particle.size,
        height: particle.size,
        backgroundColor: particle.color,
        translateX: particle.offsetX, // Local jitter
        translateY: particle.offsetY,
        boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`
      }}
    />
  );
}

function BackgroundDust() {
  // Static background noise for depth (replaces old heavy logic)
  const [dust, setDust] = useState<any[]>([]);

  useEffect(() => {
    setDust(Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2,
      duration: Math.random() * 10 + 10
    })));
  }, []);

  return (
    <div className="absolute inset-0 z-[-1]">
      {dust.map((d) => (
        <motion.div
          key={d.id}
          className="absolute bg-white/10 rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: d.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

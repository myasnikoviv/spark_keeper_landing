"use client";
import { motion, useMotionValue, useSpring, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// --- Types ---
interface SwarmParticle {
  id: number;
  size: number;
  color: string;
  springConfig: { stiffness: number; damping: number; mass: number };
  offsetX: number;
  offsetY: number;
  noiseOffset: number; // For Brownian motion
}

interface BackgroundParticle {
  id: number;
  left: number;
  top: number;
  size: number;
  color: string;
  blur: number;
  speed: number;
  initialY: number;
}

// --- Config ---
const COLORS = [
  "rgba(0, 212, 255, 0.8)", // Electric Blue
  "rgba(157, 78, 221, 0.8)", // Neon Violet
  "rgba(255, 107, 53, 0.7)", // Warm Orange
  "rgba(255, 255, 255, 0.4)", // White (dimmer)
];

const SWARM_SIZE = 20;
const BACKGROUND_COUNT = 50;

export function FloatingParticles() {
  // --- Cursor Swarm State ---
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Scroll Inertia Logic
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollVelocity = useRef(0);

  // Update scroll velocity manually for tighter control
  useAnimationFrame(() => {
    const currentScroll = scrollY.get();
    const delta = currentScroll - lastScrollY;
    scrollVelocity.current = delta;
    setLastScrollY(currentScroll);
  });

  const [swarm, setSwarm] = useState<SwarmParticle[]>([]);
  const [backgroundParticles, setBackgroundParticles] = useState<BackgroundParticle[]>([]);

  // --- Initialization (Client Only) ---
  useEffect(() => {
    // 1. Setup Swarm
    const newSwarm = Array.from({ length: SWARM_SIZE }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      color: i % 2 === 0 ? "rgba(255, 107, 53, 0.9)" : "rgba(157, 78, 221, 0.9)",
      springConfig: {
        stiffness: 120 - i * 4, // Decrease stiffness (more lag)
        damping: 15 + i,        // Increase damping (more fluid drag)
        mass: 1 + i * 0.05
      },
      offsetX: (Math.random() - 0.5) * 60,
      offsetY: (Math.random() - 0.5) * 60,
      noiseOffset: Math.random() * 1000
    }));
    setSwarm(newSwarm);

    // 2. Setup Global Background Particles (Multi-color, Depth)
    const bg = Array.from({ length: BACKGROUND_COUNT }, (_, i) => {
      const depth = Math.random(); // 0 = far (slow, small), 1 = near (fast, large)
      return {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + depth * 3, // 1px to 4px
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        blur: depth < 0.5 ? 2 : 0, // Far items blurred
        speed: 10 + depth * 20,    // Parallax speed factor
        initialY: Math.random() * 100
      };
    });
    setBackgroundParticles(bg);

    // 3. Mouse Listener
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[40]">
      {/* 1. Global Background Layer */}
      {backgroundParticles.map((p) => (
        <GlobalParticleItem key={p.id} particle={p} scrollY={scrollY} />
      ))}

      {/* 2. Cursor Swarm */}
      {swarm.map((p) => (
        <SwarmParticleItem
          key={p.id}
          particle={p}
          mouseX={mouseX}
          mouseY={mouseY}
          scrollVelocity={scrollVelocity}
        />
      ))}
    </div>
  );
}

// --- Sub-components ---

function SwarmParticleItem({ particle, mouseX, mouseY, scrollVelocity }: { particle: SwarmParticle, mouseX: any, mouseY: any, scrollVelocity: React.MutableRefObject<number> }) {
  // Physics: Spring to mouse
  const springX = useSpring(mouseX, particle.springConfig);
  const springY = useSpring(mouseY, particle.springConfig);

  // Brownian Motion + Scroll Inertia
  const xParams = useMotionValue(0);
  const yParams = useMotionValue(0);

  useAnimationFrame((t) => {
    // Brownian "Life" (Sine wave combination)
    const time = t * 0.001;
    const brownianX = Math.sin(time + particle.noiseOffset) * 10;
    const brownianY = Math.cos(time * 0.8 + particle.noiseOffset) * 10;

    // Scroll Inertia (Drag up/down based on scroll delta)
    // If we scroll down (positive velocity), particles should lag UP (negative Y)
    const inertiaY = -scrollVelocity.current * (particle.id * 0.5); // More lag for tail particles

    xParams.set(particle.offsetX + brownianX);
    yParams.set(particle.offsetY + brownianY + inertiaY);
  });

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        x: springX,
        y: springY,
        translateX: xParams, // Combined offset
        translateY: yParams,
        width: particle.size,
        height: particle.size,
        backgroundColor: particle.color,
        boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
      }}
    />
  );
}

function GlobalParticleItem({ particle, scrollY }: { particle: BackgroundParticle, scrollY: any }) {
  // Parallax logic: faster particles move more when scrolling
  const y = useTransform(scrollY, [0, 5000], [0, -5000 * (particle.speed / 100)]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${particle.left}%`,
        top: `${particle.top}%`,
        y: y, // Parallax offset
        width: particle.size,
        height: particle.size,
        backgroundColor: particle.color,
        filter: `blur(${particle.blur}px)`,
        opacity: 0.6
      }}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}

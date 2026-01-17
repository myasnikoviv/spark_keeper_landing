"use client";
import { motion, useMotionValue, useScroll, useTransform, useAnimationFrame, MotionValue } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// --- Types ---
interface SwarmParticle {
  id: number;
  size: number;
  color: string;
  // Physics properties
  targetX: number; // Mouse target relative to center
  targetY: number;
  currentX: number; // Actual interpolated position
  currentY: number;
  followSpeed: number; // 0.05 to 0.15 typically

  // Brownian/Noise properties
  noiseOffset: number;
  noiseSpeed: number;

  // Original offsets
  baseOffsetX: number;
  baseOffsetY: number;
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
  const mousePos = useRef({ x: -1000, y: -1000 });

  // Track scroll for inertia
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);

  // Swarm state (mutable refs for performance in animation loop)
  const swarmParticles = useRef<SwarmParticle[]>([]);

  const [isClient, setIsClient] = useState(false);

  // Store motion values in a stable way via Registry
  const particleMotionValues = useRef<Map<number, { x: MotionValue<number>, y: MotionValue<number> }>>(new Map());

  // Background particles state
  const [backgroundParticles, setBackgroundParticles] = useState<BackgroundParticle[]>([]);

  // --- Initialization (Client Only) ---
  useEffect(() => {
    setIsClient(true);

    // 1. Setup Swarm Data
    swarmParticles.current = Array.from({ length: SWARM_SIZE }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      color: i % 2 === 0 ? "rgba(255, 107, 53, 0.9)" : "rgba(157, 78, 221, 0.9)",
      targetX: 0,
      targetY: 0,
      currentX: -1000, // Start off screen
      currentY: -1000,
      followSpeed: 0.03 + Math.random() * 0.05, // Varied speeds for "tail" effect
      noiseOffset: Math.random() * 1000,
      noiseSpeed: 0.002 + Math.random() * 0.003,
      baseOffsetX: (Math.random() - 0.5) * 60,
      baseOffsetY: (Math.random() - 0.5) * 60,
    }));

    // 2. Setup Global Background Particles
    const bg = Array.from({ length: BACKGROUND_COUNT }, (_, i) => {
      const depth = Math.random();
      return {
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + depth * 3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        blur: depth < 0.5 ? 2 : 0,
        speed: 10 + depth * 20,
        initialY: Math.random() * 100
      };
    });
    setBackgroundParticles(bg);

    // 3. Mouse Listener with fallback to center
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Initial position center screen if no mouse yet
    if (mousePos.current.x === -1000) {
      // Fallback to center if window is defined (it is since in useEffect)
      mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // --- The Physics Loop ---
  useAnimationFrame((time) => {
    if (!isClient || swarmParticles.current.length === 0) return;

    // 1. Calculate Scroll Velocity (Inertia)
    const currentScrollY = scrollY.get();
    const deltaY = currentScrollY - lastScrollY.current;

    // Smooth velocity tracking
    scrollVelocity.current = scrollVelocity.current * 0.9 + deltaY * 0.5;

    lastScrollY.current = currentScrollY;

    // 2. Update each particle
    swarmParticles.current.forEach((p) => {
      const mv = particleMotionValues.current.get(p.id);
      if (!mv) return;

      const {
        followSpeed,
        baseOffsetX, baseOffsetY,
        noiseOffset, noiseSpeed
      } = p;

      // Target Position (Mouse + Base Offset)
      const scrollLagY = -scrollVelocity.current * (2 + p.id * 0.1);

      const targetX = mousePos.current.x + baseOffsetX;
      const targetY = mousePos.current.y + baseOffsetY + scrollLagY;

      // Smooth Interpolation (Lerp)
      p.currentX += (targetX - p.currentX) * followSpeed;
      p.currentY += (targetY - p.currentY) * followSpeed;

      // Brownian Motion
      const t = time * noiseSpeed + noiseOffset;
      const brownianX = Math.sin(t) * 10;
      const brownianY = Math.cos(t * 0.8) * 10;

      // Apply to MotionValues
      mv.x.set(p.currentX + brownianX);
      mv.y.set(p.currentY + brownianY);
    });
  });

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[40]">
      {/* 1. Global Background Layer */}
      {backgroundParticles.map((p) => (
        <GlobalParticleItem key={p.id} particle={p} scrollY={scrollY} />
      ))}

      {/* 2. Cursor Swarm */}
      {swarmParticles.current.map((p) => (
        <SwarmParticleItem
          key={p.id}
          particle={p}
          onRegister={(x, y) => {
            particleMotionValues.current.set(p.id, { x, y });
          }}
        />
      ))}
    </div>
  );
}

// --- Sub-components ---

function SwarmParticleItem({ particle, onRegister }: {
  particle: SwarmParticle,
  onRegister: (x: MotionValue<number>, y: MotionValue<number>) => void
}) {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);

  useEffect(() => {
    onRegister(x, y);
  }, [x, y, onRegister]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        x, // Assign motion values
        y,
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
  // We offset Y based on scroll.
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

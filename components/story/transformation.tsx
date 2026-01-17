"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TransformationProps {
  content: {
    fragments: string[];
  };
}

export function Transformation({ content }: TransformationProps) {
  const [mounted, setMounted] = useState(false);

  // Real intent examples
  const intentExamples = [
    "Book: The Courage to Be Disliked",
    "Plan: Iceland in winter",
    "Gift idea: concert tickets",
    "Watch: True Detective",
    "Read later: RWA tokenization",
    "Buy: winter gloves",
    "Try: morning yoga",
    "Remind: call mom",
    "Idea: new app feature",
    "Spotify: Deep Focus playlist"
  ];

  // Fix hydration mismatch by only rendering random elements on client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">

      {/* Background Mask */}
      <div className="absolute inset-0 pointer-events-none z-[41]"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(23, 23, 39, 1) 0%, rgba(23, 23, 39, 0) 50%)" }}
      />

      <div className="relative w-full max-w-6xl h-[900px] z-[42]">

        {/* 1. VISUAL CORE (Solar Flares & Suction System) - RAYS REMOVED */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
          {mounted && (
            <>
              {/* Rays and Lines removed per request. Only Pulse (Atmosphere) remains if desired, or just Core. */}
              {/* Layer C: Large Slow Pulses (Atmosphere) - Conserved as part of "Sphere" aura */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`pulse-${i}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF6B35]/20"
                  style={{
                    width: '200px',
                    height: '200px',
                  }}
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.3, 0],
                    borderWidth: ["1px", "0px"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeOut"
                  }}
                />
              ))}
            </>
          )}
        </div>


        {/* 2. Central Core (The Singularity) */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24"
          animate={{
            scale: [1, 1.05, 1], // Heartbeat
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Intense center */}
          <div className="absolute inset-0 rounded-full bg-[#FF6B35] shadow-[0_0_60px_#FF6B35]" />
          <div className="absolute inset-0 rounded-full bg-white blur-[20px] opacity-60 mix-blend-overlay" />
        </motion.div>


        {/* 3. Incoming Intent Examples (The Text) */}
        {/* 3. Incoming Intent Examples (The Text) */}
        {mounted && intentExamples.map((text, i) => {
          const angle = (i * 360) / intentExamples.length;
          const radius = 350;

          return (
            <div key={i}>
              <motion.div
                className="absolute top-1/2 left-1/2 z-10"
                style={{ transformOrigin: "center" }}
                initial={{
                  x: Math.cos((angle * Math.PI) / 180) * radius,
                  y: Math.sin((angle * Math.PI) / 180) * radius,
                  opacity: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                whileInView={{
                  x: 0,
                  y: 0,
                  opacity: [0, 1, 1, 1, 0], // Stay white/visible for 80% of journey
                  scale: [1, 1, 0.2], // Shrink at the end
                  scaleX: [1, 1, 2], // Spaghettification (Stretch) as it enters
                  filter: ["blur(0px)", "blur(0px)", "blur(4px)"], // Blur at end
                  color: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FF6B35"] // Turn orange only at event horizon
                }}
                viewport={{ once: false }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: [0.7, 0, 0.84, 0], // Custom "Gravity" bezier (heavy acceleration)
                  repeatDelay: Math.random() * 1
                }}
              >
                <p className="text-sm md:text-base whitespace-nowrap font-medium" style={{ textShadow: "0 0 10px rgba(255,255,255,0.2)" }}>
                  {text}
                </p>
              </motion.div>
            </div>
          );
        })}

      </div>
    </section >
  );
}

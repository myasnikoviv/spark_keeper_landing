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

        {/* 1. VISUAL CORE (Solar Flares & Suction System) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
          {mounted && (
            <>
              {/* Layer A: High-frequency "Tremor" Rays (Static but shaking) */}
              {[...Array(48)].map((_, i) => (
                <motion.div
                  key={`tremor-${i}`}
                  className="absolute top-1/2 left-1/2 origin-left"
                  style={{
                    height: '1px',
                    width: '40%', // 320px radius
                    rotate: i * (360 / 48),
                    background: 'linear-gradient(90deg, rgba(255,107,53,0.8) 0%, transparent 100%)',
                  }}
                  animate={{
                    scaleX: [0.95, 1.05, 0.95],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 0.1 + Math.random() * 0.1, // Very fast jitter
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: Math.random()
                  }}
                />
              ))}

              {/* Layer B: "Suction" Particles (Moving INWARD) */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={`suction-${i}`}
                  className="absolute top-1/2 left-1/2 origin-left rounded-full bg-white"
                  style={{
                    height: '2px',
                    width: '40px', // Streak length
                    rotate: Math.random() * 360,
                  }}
                  initial={{ x: 300, opacity: 0, scaleX: 1 }} // Start far out
                  animate={{
                    x: 40, // End near core (radius 30-40)
                    opacity: [0, 0.8, 0], // Fade in then out entering core
                    scaleX: [0.5, 2, 0.5] // Stretch as it moves fast
                  }}
                  transition={{
                    duration: 1 + Math.random() * 1.5,
                    repeat: Infinity,
                    ease: "easeIn", // Accel towards center
                    delay: Math.random() * 2
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-l from-transparent via-[#FF6B35] to-transparent" />
                </motion.div>
              ))}

              {/* Layer C: Large Slow Pulses (Atmosphere) */}
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
        {/* They should look like they are being sucked in too, replacing the previous simple radial motion */}
        {mounted && intentExamples.map((text, i) => {
          const angle = (i * 360) / intentExamples.length;
          const radius = 350;

          return (
            <div key={i}>
              {/* Connection Line - subtle */}
              <svg className="absolute top-1/2 left-1/2 w-[800px] h-[800px] pointer-events-none -translate-x-1/2 -translate-y-1/2 overflow-visible z-0">
                <motion.line
                  x1="400" y1="400"
                  x2={400 + Math.cos((angle * Math.PI) / 180) * radius}
                  y2={400 + Math.sin((angle * Math.PI) / 180) * radius}
                  stroke="rgba(255,107,53,0.1)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>

              <motion.div
                className="absolute top-1/2 left-1/2 z-10"
                initial={{
                  x: Math.cos((angle * Math.PI) / 180) * radius,
                  y: Math.sin((angle * Math.PI) / 180) * radius,
                  opacity: 0,
                  scale: 1,
                  color: "#FFFFFF"
                }}
                whileInView={{
                  // Move towards center 
                  x: [Math.cos((angle * Math.PI) / 180) * radius, 0],
                  y: [Math.sin((angle * Math.PI) / 180) * radius, 0],
                  opacity: [0, 1, 0, 0], // Fade in, hold, fade out near core
                  scale: [0.9, 1, 0.4],
                  color: ["#FFFFFF", "#FFFFFF", "#FF6B35"]
                }}
                viewport={{ once: false }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: "easeIn",
                  repeatDelay: Math.random() * 1
                }}
                style={{ transformOrigin: "center" }}
              >
                <p className="text-sm md:text-base whitespace-nowrap font-medium" style={{ textShadow: "0 0 10px rgba(255,255,255,0.2)" }}>
                  {text}
                </p>
              </motion.div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

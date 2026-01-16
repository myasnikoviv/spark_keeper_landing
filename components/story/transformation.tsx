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

  // Real intent examples as per enh6.md
  // We ignore content.fragments and use these specific ones or a mix if passed differently, 
  // but spec says "Replace generic text with specifics"
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
      {/* The Spark - EVENT HORIZON */}
      <div className="relative">
        {/* Central Core (Universe Center - Warm Orange) */}
        <motion.div
          className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FCA311] z-20 relative"
          style={{
            boxShadow: "0 0 60px rgba(255,107,53,0.8), 0 0 120px rgba(255,107,53,0.4)"
          }}
          animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 60px rgba(255,107,53,0.8), 0 0 120px rgba(255,107,53,0.4)",
              "0 0 90px rgba(255,107,53,1), 0 0 150px rgba(255,107,53,0.6)",
              "0 0 60px rgba(255,107,53,0.8), 0 0 120px rgba(255,107,53,0.4)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Incoming Thoughts (Suction Effect) - Only Render Client-Side */}
        {mounted && intentExamples.map((text, i) => {
          const angle = (i * 360) / intentExamples.length;
          const radius = 400; // Start far out

          return (
            <div key={i}>
              {/* Curved Connection Line (SVG) */}
              <svg className="absolute top-1/2 left-1/2 w-[400px] h-[400px] pointer-events-none -translate-x-1/2 -translate-y-1/2 overflow-visible z-0">
                <motion.path
                  d={`M ${Math.cos((angle * Math.PI) / 180) * radius} ${Math.sin((angle * Math.PI) / 180) * radius} Q 0 0 0 0`}
                  stroke="rgba(255,107,53,0.3)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeIn"
                  }}
                />
              </svg>

              {/* Text Item */}
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
                  // Move towards center 0,0
                  x: [Math.cos((angle * Math.PI) / 180) * radius, 0],
                  y: [Math.sin((angle * Math.PI) / 180) * radius, 0],
                  opacity: [0, 1, 0], // Fade in then vanish at core
                  scale: [0.9, 1, 0.2],  // Shrink into singularity
                  color: ["#FFFFFF", "#FF6B35", "#FF6B35"] // White -> Orange
                }}
                viewport={{ once: false }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "easeIn", // Accelerate into core
                  repeatDelay: Math.random() * 2 // Randomize respawn
                }}
                style={{
                  transformOrigin: "center"
                }}
              >
                <p
                  className="text-sm md:text-base whitespace-nowrap font-medium"
                  style={{
                    textShadow: "0 0 10px rgba(255,255,255,0.2)",
                  }}
                >
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

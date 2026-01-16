"use client";
import { motion } from "framer-motion";

interface TransformationProps {
  content: {
    fragments: string[];
  };
}

export function Transformation({ content }: TransformationProps) {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* The Spark - EVENT HORIZON */}
      <div className="relative">
        {/* Central Core */}
        <motion.div
          className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white shadow-[0_0_80px_rgba(255,255,255,0.8),0_0_150px_rgba(255,107,53,0.5)] z-20 relative"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Incoming Thoughts (Suction Effect) */}
        {intentExamples.map((text, i) => {
          const angle = (i * 360) / intentExamples.length;
          const radius = 400; // Start far out

          return (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 z-10"
              initial={{
                x: Math.cos((angle * Math.PI) / 180) * radius,
                y: Math.sin((angle * Math.PI) / 180) * radius,
                opacity: 0,
                scale: 1
              }}
              whileInView={{
                // Move towards center 0,0
                x: [
                  Math.cos((angle * Math.PI) / 180) * radius,
                  0
                ],
                y: [
                  Math.sin((angle * Math.PI) / 180) * radius,
                  0
                ],
                opacity: [0, 1, 0], // Fade in then vanish at core
                scale: [0.8, 1, 0]  // Shrink into singularity
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
                className="text-sm md:text-base text-white/50 whitespace-nowrap"
                style={{
                  textShadow: "0 0 10px rgba(255,255,255,0.3)",
                }}
              >
                {text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

interface TransformationProps {
  content: {
    fragments: string[];
  };
}

export function Transformation({ content }: TransformationProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      {/* The Spark - now active, pulling */}
      <div className="relative">
        {/* Central pulling force */}
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#9D4EDD]"
          style={{
            boxShadow:
              "0 0 60px rgba(255,107,53,0.6), 0 0 120px rgba(157,78,221,0.4)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            boxShadow: [
              "0 0 60px rgba(255,107,53,0.6), 0 0 120px rgba(157,78,221,0.4)",
              "0 0 80px rgba(255,107,53,0.8), 0 0 160px rgba(157,78,221,0.6)",
              "0 0 60px rgba(255,107,53,0.6), 0 0 120px rgba(157,78,221,0.4)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Fragments being pulled in - smaller, simpler texts */}
        {content.fragments.slice(0, 8).map((fragment, i) => {
          const angle = (i * 360) / 8;
          const radius = 350;

          return (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2"
              style={{
                transformOrigin: "center",
              }}
              initial={{
                x: Math.cos((angle * Math.PI) / 180) * radius,
                y: Math.sin((angle * Math.PI) / 180) * radius,
                opacity: 0,
              }}
              whileInView={{
                x: [
                  Math.cos((angle * Math.PI) / 180) * radius,
                  Math.cos((angle * Math.PI) / 180) * (radius * 0.3),
                ],
                y: [
                  Math.sin((angle * Math.PI) / 180) * radius,
                  Math.sin((angle * Math.PI) / 180) * (radius * 0.3),
                ],
                opacity: [0.3, 0.8, 0.3],
              }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p
                className="text-sm text-[#E8E8F0]/60 whitespace-nowrap"
                style={{
                  filter: "blur(0.5px)",
                  textShadow: "0 0 10px rgba(0,212,255,0.3)",
                }}
              >
                {fragment.split(" ").slice(0, 3).join(" ")}...
              </p>

              {/* Light trail */}
              <motion.div
                className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-[#00D4FF]/50 to-transparent"
                style={{
                  transformOrigin: "left center",
                  transform: `rotate(${angle - 180}deg)`,
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          );
        })}

        {/* Pulling force visualization - light rays */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <motion.div
              key={`ray-${i}`}
              className="absolute top-1/2 left-1/2 w-px h-48 bg-gradient-to-b from-[#FF6B35]/30 to-transparent origin-top"
              style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: "center top",
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scaleY: [1, 1.3, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Ambient response - void reacting */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(157,78,221,0.1) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}

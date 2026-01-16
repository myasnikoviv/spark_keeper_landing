"use client";
import { motion } from "framer-motion";

interface ConstellationProps {
  content: {
    ideas: Array<{ text: string; x: number; y: number }>;
  };
}

export function Constellation({ content }: ConstellationProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="relative w-full max-w-6xl h-[900px]">
        {/* Ideas as constellation points */}
        {content.ideas.map((idea, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${idea.x}%`,
              top: `${idea.y}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              ease: "easeOut",
            }}
          >
            {/* Point of light */}
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              {/* Core point */}
              <div
                className="w-3 h-3 rounded-full bg-[#00D4FF]"
                style={{
                  boxShadow: "0 0 20px rgba(0,212,255,0.8), 0 0 40px rgba(0,212,255,0.4)",
                }}
              />

              {/* Glow */}
              <div
                className="absolute inset-0 -m-6 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)",
                  filter: "blur(10px)",
                }}
              />

              {/* Idea text - appears on proximity */}
              <motion.div
                className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 0.6, 0.4] }}
                viewport={{ once: false }}
                transition={{
                  duration: 2,
                  delay: 1 + i * 0.3,
                }}
              >
                <p
                  className="text-sm text-[#E8E8F0]/60"
                  style={{
                    filter: "blur(0.3px)",
                    textShadow: "0 0 10px rgba(0,212,255,0.3)",
                  }}
                >
                  {idea.text}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}

        {/* Connections between ideas - organic, living threads */}
        {content.ideas.map((idea, i) => {
          if (i === content.ideas.length - 1) return null;
          const nextIdea = content.ideas[i + 1];
          const distance = Math.sqrt(
            Math.pow(nextIdea.x - idea.x, 2) + Math.pow(nextIdea.y - idea.y, 2)
          );

          // Only connect nearby ideas
          if (distance > 30) return null;

          return (
            <motion.svg
              key={`connection-${i}`}
              className="absolute inset-0 pointer-events-none"
              style={{ width: "100%", height: "100%" }}
            >
              <motion.line
                x1={`${idea.x}%`}
                y1={`${idea.y}%`}
                x2={`${nextIdea.x}%`}
                y2={`${nextIdea.y}%`}
                stroke="url(#gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: false }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#00D4FF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </motion.svg>
          );
        })}

        {/* Orbital hints - ideas in motion */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9D4EDD]/10"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
            }}
            animate={{
              rotate: 360,
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              rotate: {
                duration: 40 + i * 10,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}

        {/* Central organizing force - subtle presence */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32"
          style={{
            background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}

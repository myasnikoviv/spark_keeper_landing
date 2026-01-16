"use client";
import { motion } from "framer-motion";

interface FragmentedRealityProps {
  content: {
    fragments: string[];
  };
}

export function FragmentedReality({ content }: FragmentedRealityProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 md:py-32">
      {/* Scattered thought fragments - floating in space */}
      <div className="relative w-full max-w-7xl h-[600px] md:h-[800px]">
        {content.fragments.map((fragment, i) => {
          const positions = [
            { top: "10%", left: "15%" },
            { top: "25%", right: "20%" },
            { top: "45%", left: "10%" },
            { top: "15%", right: "15%" },
            { top: "60%", left: "25%" },
            { top: "35%", left: "45%" },
            { top: "70%", right: "25%" },
            { top: "55%", right: "35%" },
          ];

          const position = positions[i % positions.length];

          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                ...position,
                maxWidth: "280px",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: [0, 1, 0.8], y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 3,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <p
                  className="text-lg md:text-xl text-gray-200"
                  style={{
                    fontWeight: 400,
                    lineHeight: 1.6,
                    textShadow: "0 0 20px rgba(157,78,221,0.2)",
                  }}
                >
                  {fragment}
                </p>

                {/* Fading glow behind text */}
                <motion.div
                  className="absolute inset-0 -z-10 blur-3xl"
                  style={{
                    background: `radial-gradient(ellipse, rgba(${i % 2 === 0 ? "157,78,221" : "0,212,255"
                      },0.1) 0%, transparent 70%)`,
                  }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Disconnection visualization - broken light threads */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`thread-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#9D4EDD]/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: "10%",
              right: "10%",
              transformOrigin: "center",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: [0, 1, 0.3], opacity: [0, 0.4, 0.1] }}
            viewport={{ once: false }}
            transition={{
              duration: 4,
              delay: i * 0.6,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Central void - emptiness in the middle */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
        style={{
          background: "radial-gradient(circle, rgba(15,15,26,0.8) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}

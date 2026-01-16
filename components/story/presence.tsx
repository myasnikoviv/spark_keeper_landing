"use client";
import { motion } from "framer-motion";

interface PresenceProps {
  content: {
    whisper: string;
    qualities: string[];
  };
}

export function Presence({ content }: PresenceProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="relative max-w-5xl w-full">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Sparky as energy presence - not a character */}
          <div className="relative h-[600px]">
            {/* Core energy - organic, breathing */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Outer aura */}
              <motion.div
                className="absolute inset-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(255,107,53,0.2) 0%, rgba(157,78,221,0.15) 40%, transparent 70%)",
                  filter: "blur(60px)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Middle energy layer */}
              <motion.div
                className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,107,53,0.4) 0%, rgba(157,78,221,0.3) 50%, transparent 70%)",
                  filter: "blur(40px)",
                }}
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Core warmth */}
              <motion.div
                className="w-32 h-32 rounded-full"
                style={{
                  background: "radial-gradient(circle, #FF6B35 0%, #9D4EDD 100%)",
                  filter: "blur(20px)",
                  boxShadow: "0 0 80px rgba(255,107,53,0.6)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 80px rgba(255,107,53,0.6)",
                    "0 0 120px rgba(255,107,53,0.8), 0 0 160px rgba(157,78,221,0.5)",
                    "0 0 80px rgba(255,107,53,0.6)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Floating energy particles */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 360) / 12;
              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-[#FF6B35]"
                  style={{
                    filter: "blur(2px)",
                  }}
                  animate={{
                    x: [
                      0,
                      Math.cos((angle * Math.PI) / 180) * 150,
                      Math.cos((angle * Math.PI) / 180) * 200,
                      0,
                    ],
                    y: [
                      0,
                      Math.sin((angle * Math.PI) / 180) * 150,
                      Math.sin((angle * Math.PI) / 180) * 200,
                      0,
                    ],
                    opacity: [0, 0.8, 0.4, 0],
                    scale: [0, 1, 1.5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut",
                  }}
                />
              );
            })}

            {/* Subtle pulse rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`ring-${i}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FF6B35]/20"
                style={{
                  width: `${100 + i * 60}px`,
                  height: `${100 + i * 60}px`,
                }}
                animate={{
                  scale: [1, 2, 2.5],
                  opacity: [0.5, 0.2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Qualities - floating, not listed */}
          <div className="relative h-[600px]">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            >
              <p
                className="text-3xl md:text-4xl leading-relaxed"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 300,
                  color: "#E8E8F0",
                  textShadow: "0 0 30px rgba(255,107,53,0.2)",
                }}
              >
                {content.whisper}
              </p>
            </motion.div>

            {/* Qualities as floating thoughts */}
            <div className="relative h-96">
              {content.qualities.map((quality, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${i * 22}%`,
                    left: i % 2 === 0 ? "0%" : "10%",
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: [0, 0.7, 0.5], x: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                  }}
                >
                  <motion.p
                    className="text-xl text-[#9B9BAC]"
                    style={{
                      fontWeight: 300,
                      lineHeight: 1.8,
                      filter: "blur(0.3px)",
                    }}
                    animate={{
                      opacity: [0.5, 0.7, 0.5],
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {quality}
                  </motion.p>

                  {/* Subtle glow */}
                  <motion.div
                    className="absolute inset-0 -z-10 blur-2xl"
                    style={{
                      background: "radial-gradient(ellipse, rgba(255,107,53,0.1) 0%, transparent 70%)",
                    }}
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

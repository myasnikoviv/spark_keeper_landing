"use client";
import { motion } from "framer-motion";

interface WhisperedVoicesProps {
  content: {
    voices: Array<{
      quote: string;
      author: string;
    }>;
  };
}

export function WhisperedVoices({ content }: WhisperedVoicesProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 md:py-32">
      <div className="relative max-w-5xl w-full">
        {/* Voices floating in space - not testimonial cards */}
        <div className="relative flex flex-col gap-20 md:block md:h-[800px]">
          {content.voices.map((voice, i) => {
            const positions = [
              { top: "15%", left: "10%" },
              { top: "45%", right: "12%" },
              { top: "70%", left: "15%" },
              { top: "25%", left: "50%" }, // Added 4th position
              { top: "60%", right: "30%" }, // Added 5th position
            ];

            const position = positions[i % positions.length];

            return (
              <motion.div
                key={i}
                className="static md:absolute max-w-md w-full md:w-auto"
                style={{
                  ...position,
                  // Mobile adjustment: let them stack naturally
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: [0, 1, 0.9], y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 3,
                  delay: i * 0.5, // Reduced delay
                  ease: "easeOut",
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Quote mark - subtle, not decorative */}
                  <motion.div
                    className="mb-6 text-6xl text-[#9D4EDD]/40"
                    style={{
                      lineHeight: 1,
                    }}
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    "
                  </motion.div>

                  {/* Voice text */}
                  <p
                    className="text-xl md:text-2xl mb-8 leading-relaxed text-white"
                    style={{
                      fontWeight: 400,
                      fontStyle: "italic",
                      textShadow: "0 0 20px rgba(157,78,221,0.15)",
                    }}
                  >
                    {voice.quote}
                  </p>

                  {/* Author - very subtle */}
                  <p
                    className="text-sm text-gray-400"
                    style={{
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    — {voice.author}
                  </p>

                  {/* Ambient glow */}
                  <div
                    className="absolute inset-0 -inset-12 -z-10"
                    style={{
                      background: `radial-gradient(ellipse at ${i % 2 === 0 ? "top left" : "bottom right"
                        }, rgba(157,78,221,0.15) 0%, transparent 60%)`,
                      filter: "blur(50px)",
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Depth layers */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at ${30 + i * 20}% ${40 + i * 15
                }%, rgba(0,212,255,0.03) 0%, transparent 60%)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
}

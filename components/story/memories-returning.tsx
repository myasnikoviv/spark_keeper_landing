"use client";
import { motion } from "framer-motion";

interface MemoriesReturningProps {
  content: {
    memories: Array<{
      text: string;
      context: string;
    }>;
  };
}

export function MemoriesReturning({ content }: MemoriesReturningProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 md:py-32">
      <div className="relative max-w-6xl w-full">
        {/* Memories floating in space - not as cards */}
        <div className="relative flex flex-col gap-16 md:block md:h-[800px]">
          {content.memories.map((memory, i) => {
            const positions = [
              { top: "10%", left: "15%", maxWidth: "320px" },
              { top: "25%", right: "10%", maxWidth: "280px" },
              { top: "50%", left: "8%", maxWidth: "300px" },
              { top: "35%", left: "45%", maxWidth: "350px" },
              { top: "65%", right: "15%", maxWidth: "290px" },
            ];

            const position = positions[i % positions.length];

            return (
              <motion.div
                key={i}
                className="static md:absolute w-full md:w-auto"
                style={{
                  // Applied only via class logic where possible, but style object overrides.
                  // For mobile, we want natural flow.
                  // We can use a trick: spread position ONLY if window width > 768? 
                  // No window access in render.
                  // CSS Variable approach: 
                  // Set variables --top, --left. Use `top: var(--top)` in style.
                  // Tailwind: `md:top-[--top]`?
                  // Easier: Just let it be absolute on desktop.
                  // Wait, if I use `style={{ top: "10%" }}` it applies to BOTH static and absolute.
                  // If static, `top` is ignored. PERFECT.
                  // Use className="static md:absolute".
                  ...position,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: [0, 1, 0.9],
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 3,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                >
                  {/* Memory text - primary */}
                  <p
                    className="text-2xl md:text-3xl mb-4 leading-relaxed text-white"
                    style={{
                      fontWeight: 600,
                      textShadow: "0 0 20px rgba(0,212,255,0.2)",
                    }}
                  >
                    {memory.text}
                  </p>

                  {/* Context - whispered */}
                  <motion.p
                    className="text-lg text-gray-200"
                    style={{
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {memory.context}
                  </motion.p>

                  {/* Glow behind memory */}
                  <motion.div
                    className="absolute inset-0 -inset-8 -z-10"
                    style={{
                      background: `radial-gradient(ellipse at ${i % 2 === 0 ? "left" : "right"
                        } center, rgba(${i % 3 === 0
                          ? "0,212,255"
                          : i % 3 === 1
                            ? "157,78,221"
                            : "255,107,53"
                        },0.08) 0%, transparent 70%)`,
                      filter: "blur(40px)",
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                  />

                  {/* Spark connection hint */}
                  <motion.div
                    className="absolute -top-6 left-0 w-px h-12 bg-gradient-to-b from-transparent via-[#00D4FF]/30 to-transparent"
                    animate={{
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Connecting threads - very subtle */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`thread-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#9D4EDD]/10 to-transparent"
              style={{
                top: `${15 + i * 10}%`,
                left: "5%",
                right: "5%",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: [0, 1, 0.7], opacity: [0, 0.2, 0.1] }}
              viewport={{ once: false }}
              transition={{
                duration: 5,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Ambient light suggesting organization */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(157,78,221,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}

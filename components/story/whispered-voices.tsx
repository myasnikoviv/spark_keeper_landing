"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface WhisperedVoicesProps {
  content: {
    voices: Array<{
      quote: string;
      author: string;
      role?: string;
      rating?: number;
    }>;
  };
}

export function WhisperedVoices({ content }: WhisperedVoicesProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <section className="relative min-h-[100vh] py-32 px-6 overflow-hidden" />;
  }

  return (
    <section className="relative min-h-screen py-32 px-6 overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Grid Layout - Stable, no disappearing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {content.voices.map((voice, i) => {
            // Multi-directional drift values
            const driftX = (Math.random() - 0.5) * 40; // +/- 20px horizontal
            const driftY = (Math.random() - 0.5) * 40; // +/- 20px vertical
            const duration = 6 + Math.random() * 4; // Slow, varying duration (6-10s)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex flex-col items-start"
              >
                {/* Restored DRIFT Animation: X and Y movement */}
                <motion.div
                  animate={{
                    x: [0, driftX, 0],
                    y: [0, driftY, 0]
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                >
                  {/* Rating - Living Sparks */}
                  <div className="flex gap-2 mb-4 ml-1 opacity-80">
                    {[...Array(voice.rating || 5)].map((_, s) => (
                      <motion.div
                        key={s}
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, delay: s * 0.1, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Sparkles className="w-4 h-4 text-spark-orange fill-spark-orange/20" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote - Original Typography */}
                  <p className="text-xl md:text-2xl text-white/90 font-serif italic leading-relaxed mb-6 drop-shadow-2xl">
                    "{voice.quote}"
                  </p>

                  {/* Author - Original Left Border Style */}
                  <div className="flex items-center gap-4 border-l border-white/20 pl-4">
                    <div className="flex flex-col">
                      <span className="text-white font-medium tracking-wide text-sm">
                        {voice.author}
                      </span>
                      <span className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">
                        {voice.role || "Early Adopter"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface WhisperedVoicesProps {
  content: {
    voices: Array<{
      quote: string;
      author: string;
      role?: string; // e.g. "Designer, UK"
      rating?: number;
    }>;
  };
}

export function WhisperedVoices({ content }: WhisperedVoicesProps) {
  return (
    <section className="relative min-h-[100vh] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Floating Space - No Grid, Just Space */}
        <div className="flex flex-wrap justify-center gap-16 md:gap-24 relative">
          {content.voices.map((voice, i) => {
            // Randomize parallax speed / offset slightly for "Floating" feel
            const yOffset = i % 2 === 0 ? "20%" : "0%";

            return (
              <motion.div
                key={i}
                className="relative w-full md:w-[45%] lg:w-[30%]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
              >
                {/* No Card Container - Just Text in Space */}

                {/* Rating - LIVING SPARKS */}
                <div className="flex gap-2 mb-6 ml-1">
                  {[...Array(voice.rating || 5)].map((_, s) => (
                    <motion.div
                      key={s}
                      className="relative"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, delay: s * 0.1 + (i * 0.2), repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Sparkles className="w-4 h-4 text-spark-orange fill-spark-orange/20" />
                      <motion.div
                        className="absolute inset-0 bg-spark-orange/40 blur-[5px]"
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Quote - Serif, Larger, Elegant */}
                <p className="text-xl md:text-2xl text-white/90 font-serif italic leading-relaxed mb-6 drop-shadow-2xl">
                  "{voice.quote}"
                </p>

                {/* Author - Minimal */}
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-white/20" />
                  <div className="flex flex-col">
                    <span className="text-white font-medium tracking-wide text-sm">
                      {voice.author}
                    </span>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">
                      {voice.role || "Early Adopter"}
                    </span>
                  </div>
                </div>

                {/* Subtle depth layer behind (Parallax anchor) */}
                <div className="absolute -inset-8 bg-white/5 blur-[40px] rounded-full opacity-0 hover:opacity-10 transition-opacity duration-1000 -z-10" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

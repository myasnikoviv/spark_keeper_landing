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
    <section className="relative min-h-[80vh] py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Masonry-style Grid - No more absolute positioning chaos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {content.voices.map((voice, i) => (
            <motion.div
              key={i}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1, // Staggered reveal
                ease: "easeOut",
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-6xl text-[#9D4EDD]/10 font-serif leading-none select-none">
                "
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 text-spark-orange"> {/* Use spark-orange/yellow for sparks */}
                {[...Array(voice.rating || 5)].map((_, s) => (
                  <Sparkles key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8 relative z-10 text-shadow-glow">
                "{voice.quote}"
              </p>

              {/* Author */}
              <div className="flex flex-col">
                <span className="text-white font-medium tracking-wide">
                  {voice.author}
                </span>
                <span className="text-white/40 text-xs uppercase tracking-widest mt-1">
                  {voice.role || "Early Adopter"}
                </span>
              </div>

              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-spark-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

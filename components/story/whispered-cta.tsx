"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface WhisperedCTAProps {
  content: {
    title: string;
    subtitle: string;
    disabled?: boolean;
  };
}

export function WhisperedCTA({ content }: WhisperedCTAProps) {
  return (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-6 py-32 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex flex-col items-center gap-8 text-center"
      >
        {/* Breathing Spark */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-spark-orange/20 blur-xl rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <Sparkles className="w-8 h-8 text-spark-orange opacity-80" />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide text-shadow-glow">
            {content.title}
          </h2>
          <p className="text-lg text-white/40 font-light tracking-widest uppercase text-xs">
            {content.subtitle}
          </p>
        </div>

        {/* Calm Button (or Status) */}
        <motion.button
          disabled={content.disabled}
          whileHover={{ scale: 1.05, borderColor: "rgba(255, 107, 53, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-10 py-4 mt-8 bg-transparent border border-white/10 rounded-full overflow-hidden transition-colors"
        >
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 text-white/80 font-light tracking-wide group-hover:text-white transition-colors">
            {content.disabled ? "Coming Soon" : "Get Spark Keeper"}
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}

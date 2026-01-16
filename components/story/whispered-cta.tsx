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
        {/* Breathing Spark - ENHANCED IDLE */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Core Glow */}
          <motion.div
            className="absolute inset-0 bg-spark-orange/30 blur-xl rounded-full"
            animate={{
              scale: [0.8, 1.4, 0.8],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Outer Ripple */}
          <motion.div
            className="absolute inset-0 border border-spark-orange/20 rounded-full"
            animate={{
              scale: [1, 2, 2],
              opacity: [0.5, 0, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <Sparkles className="w-8 h-8 text-spark-orange opacity-90 relative z-10" />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide text-shadow-glow">
            {content.title}
          </h2>
          <p className="text-lg text-white/40 font-light tracking-widest uppercase text-xs">
            {content.subtitle}
          </p>
        </div>

        {/* Calm Button (or Status) - ENHANCED IDLE BREATHING */}
        <motion.button
          disabled={content.disabled}
          whileHover={{ scale: 1.05, borderColor: "rgba(255, 107, 53, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          animate={{
            borderColor: ["rgba(255,255,255,0.1)", "rgba(255,107,53,0.3)", "rgba(255,255,255,0.1)"],
            boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 20px rgba(255,107,53,0.15)", "0 0 0px rgba(0,0,0,0)"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="group relative px-10 py-4 mt-8 bg-transparent border border-white/10 rounded-full overflow-hidden transition-colors"
        >
          <div className="absolute inset-0 bg-spark-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Inner pulse for idle state */}
          <motion.div
            className="absolute inset-0 bg-spark-orange/5"
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <span className="relative z-10 text-white/90 font-light tracking-wide group-hover:text-white transition-colors">
            {content.disabled ? "Coming Soon" : "Get Spark Keeper"}
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}

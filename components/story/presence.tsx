"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface PresenceProps {
  content: {
    h2: string;
    p1: string;
  };
}

export function Presence({ content }: PresenceProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 md:py-32 overflow-hidden">

      {/* Warm Ambient Presence */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-[100px] opacity-40 animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-12">
        {/* Abstract Light Presence (Replacing Avatar) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="relative w-32 h-32 mb-4 flex items-center justify-center"
        >
          <motion.div
            className="absolute inset-0 bg-spark-orange/20 blur-2xl rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="w-4 h-4 rounded-full bg-spark-yellow shadow-[0_0_20px_rgba(255,160,122,0.8)]" />
        </motion.div>

        {/* H2 Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-semibold text-white mb-6 text-shadow-glow tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {content.h2}
        </motion.h2>

        {/* Narrative */}
        <div className="space-y-6 text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            {content.p1}
          </motion.p>
        </div>

      </div>
    </section>
  );
}

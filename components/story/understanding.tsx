"use client";
import { motion } from "framer-motion";

interface UnderstandingProps {
  content: {
    h2: string;
    p1: string;
  };
}

export function Understanding({ content }: UnderstandingProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 md:py-32">
      <div className="relative max-w-4xl text-center flex flex-col items-center gap-12">
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
        <div className="space-y-8 text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            {content.p1}
          </motion.p>
        </div>

        {/* Subtle stabilizing lines/grid to suggest Order */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 3 }}
        >
          <div className="w-full h-full border-t border-b border-indigo-500/10 scale-y-50" />
        </motion.div>
      </div>
    </section>
  );
}

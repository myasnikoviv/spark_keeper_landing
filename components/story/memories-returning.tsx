"use client";
import { motion } from "framer-motion";

interface MemoriesReturningProps {
  content: {
    items: {
      title: string;
      story: string;
    }[];
  };
}

export function MemoriesReturning({ content }: MemoriesReturningProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 md:py-32">
      <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-start">

        {/* Use Cases as Anchors - Pinned in reality */}
        {content.items.map((item, i) => (
          <motion.div
            key={i}
            className="group relative cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
          >
            {/* Visual anchor point */}
            <div className="w-2 h-2 rounded-full bg-indigo-500/50 mb-4 ml-1 group-hover:bg-spark-orange/80 group-hover:shadow-[0_0_15px_rgba(255,165,0,0.6)] transition-all duration-500" />

            <h3 className="text-2xl md:text-3xl font-light text-white leading-snug tracking-wide group-hover:text-shadow-glow transition-all duration-500">
              {item.title}
            </h3>

            <p className="mt-3 text-lg text-white/40 font-light group-hover:text-indigo-200/80 transition-colors duration-500">
              {item.story}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

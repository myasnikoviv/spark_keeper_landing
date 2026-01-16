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
      <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 items-start">
        {/* Use Cases as Drifting Constellation */}
        {content.items.map((item, i) => (
          // Entry Animation Wrapper
          <motion.div
            key={i}
            className="group relative cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
          >
            {/* Continuous Drift Wrapper */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, (i % 2 === 0 ? 5 : -5), 0]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            >
              {/* Spark Marker - Luminous */}
              <div className="absolute -left-6 top-1">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-spark-orange shadow-[0_0_10px_rgba(255,107,53,0.8)]"
                  animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-light text-white leading-snug tracking-wide group-hover:text-shadow-glow transition-all duration-500">
                {item.title}
              </h3>

              <p className="mt-3 text-lg text-white/40 font-light group-hover:text-indigo-200/80 transition-colors duration-500">
                {item.story}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

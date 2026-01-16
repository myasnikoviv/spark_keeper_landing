"use client";
import { motion } from "framer-motion";

interface FragmentedRealityProps {
  content: {
    h2: string;
    p1: string;
    p2: string;
    fragments: string[];
  };
}

export function FragmentedReality({ content }: FragmentedRealityProps) {
  // Generate organized "grid-like" positions for fragments (Horizontal, deliberate)
  const fragments = content.fragments.map((text, i) => {
    // Distribute vertically in "streams"
    const row = i % 3; // 3 rows
    const col = Math.floor(i / 3);
    return {
      text,
      x: 10 + (col * 40) + (Math.random() * 10 - 5) + "%", // roughly 25-50-75%
      y: 20 + (row * 25) + (Math.random() * 10 - 5) + "%", // roughly lines
      rotation: 0, // Horizontal
      delay: i * 0.5,
      duration: 15 + Math.random() * 10,
    };
  });

  return (
    <section className="relative min-h-[100vh] overflow-hidden flex items-center justify-center px-6 py-20 md:py-32">
      {/* Extra Sparks for this section */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-1 h-1 bg-spark-orange rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(255,107,53,0.8)"
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Background Fragments (Orderly) */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {fragments.map((f, i) => (
          <motion.div
            key={i}
            className="absolute text-xl md:text-2xl text-white/5 font-light whitespace-nowrap tracking-widest"
            style={{ left: f.x, top: f.y }}
            animate={{
              x: [0, 20, 0], // Gentle horizontal drift
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: f.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: f.delay,
            }}
          >
            {f.text}
          </motion.div>
        ))}
      </div>

      {/* Narrative Overlay (Order/Truth) */}
      <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center gap-12">

        {/* H2 Title - Luminous Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 text-shadow-glow tracking-tight drop-shadow-2xl">
            {content.h2}
          </h2>
        </motion.div>

        {/* Narrative Blocks - More readable, "inside" the scene */}
        <div className="space-y-8 text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl drop-shadow-lg">
          {[content.p1, content.p2].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, delay: i * 0.3, ease: "easeInOut" }}
            >
              {text}
            </motion.p>
          ))}
        </div>

      </div>
    </section>
  );
}

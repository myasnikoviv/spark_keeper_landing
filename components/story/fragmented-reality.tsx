"use client";
import { motion } from "framer-motion";

interface FragmentedRealityProps {
  content: {
    h2: string;
    p1: string;
    p2: string;
    fragments: string[];
  };
  visualOnly?: boolean;
}

export function FragmentedReality({ content, visualOnly = false }: FragmentedRealityProps) {
  // Deterministic fragments generation to prevent hydration errors
  const fragments = content.fragments.map((text, i) => {
    // Pseudo-random based on index to ensure SSR match
    const r1 = ((i * 13 + 7) % 100) / 100; // 0..1
    const r2 = ((i * 29 + 3) % 100) / 100; // 0..1
    const r3 = ((i * 7 + 19) % 100) / 100; // 0..1

    const col = i % 3;
    const row = Math.floor(i / 3);

    return {
      text,
      // Grid-ish but chaotic, distributed deterministically
      left: `${10 + (col * 30) + (r1 * 20 - 10)}%`,
      top: `${20 + (row * 15) + (r2 * 10 - 5)}%`,
      duration: 15 + r3 * 10,
      delay: i * 0.5,
      // Drift direction
      drift: r1 > 0.5 ? 20 : -20,
    };
  });

  // Deterministic sparks generation
  const sparks = Array.from({ length: 20 }).map((_, i) => {
    const r1 = ((i * 47 + 11) % 100) / 100;
    const r2 = ((i * 83 + 23) % 100) / 100;
    const r3 = ((i * 19 + 5) % 100) / 100;

    return {
      left: `${r1 * 100}%`,
      top: `${r2 * 100}%`,
      duration: 3 + r3 * 2,
      delay: r1 * 5
    };
  });

  return (
    <section className="relative min-h-[80vh] md:min-h-[100vh] overflow-hidden flex items-center justify-center px-6 py-20 md:py-32">
      {/* Extra Sparks for this section */}
      <div className="absolute inset-0 pointer-events-none">
        {sparks.map((s, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-1 h-1 bg-spark-orange rounded-full"
            style={{
              left: s.left,
              top: s.top,
              boxShadow: "0 0 10px rgba(255,107,53,0.8)"
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -20, 0]
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay
            }}
          />
        ))}
      </div>

      {/* Background Fragments (Orderly) */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {fragments.map((f, i) => (
          <motion.div
            key={i}
            // Increased opacity: text-white/5 -> text-white/30. Added blur for "dreamy" look.
            className="absolute text-xl md:text-3xl text-white/30 font-light whitespace-nowrap tracking-widest blur-[1px]"
            style={{ left: f.left, top: f.top }}
            animate={{
              x: [0, f.drift, 0], // Gentle horizontal drift
              opacity: [0.2, 0.5, 0.2], // Pulsing visibility
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

      {/* Narrative Overlay (Order/Truth) - HIDDEN if visualOnly is true */}
      {!visualOnly && (
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
      )}
    </section>
  );
}

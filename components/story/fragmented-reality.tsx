"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  // Use state to store fragments and sparks ensures they are only generated on the client
  // preventing hydration mismatches.
  const [fragments, setFragments] = useState<any[]>([]);
  const [sparks, setSparks] = useState<any[]>([]);

  useEffect(() => {
    // 1. Generate Chaotic Fragments (Client-Side)
    // We double the content if needed to get more density
    const baseFragments = content.fragments.concat(content.fragments).slice(0, 18);

    const newFragments = baseFragments.map((text, i) => {
      // True random for chaos (since we are in useEffect, this is safe)
      const r1 = Math.random();
      const r2 = Math.random();
      const r3 = Math.random();

      return {
        id: i,
        text,
        left: `${10 + (r1 * 80)}%`, // 10-90% safe area
        top: `${10 + (r2 * 80)}%`,  // 10-90%
        duration: 2 + r3 * 3, // Fast flash: 2-5s
        delay: Math.random() * 2, // Staggered start
        driftX: (Math.random() - 0.5) * 50,
        driftY: (Math.random() - 0.5) * 50,
      };
    });
    setFragments(newFragments);

    // 2. Generate Sparks
    const newSparks = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 5
    }));
    setSparks(newSparks);

  }, [content.fragments]); // Re-run if content changes

  return (
    <section className="relative min-h-[80vh] md:min-h-[100vh] overflow-hidden flex items-center justify-center px-6 py-20 md:py-32">
      {/* Extra Sparks for this section */}
      <div className="absolute inset-0 pointer-events-none">
        {sparks.map((s) => (
          <motion.div
            key={`spark-${s.id}`}
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

      {/* Background Fragments (Chaotic Flash) */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {fragments.map((f) => (
          <motion.div
            key={f.id}
            className="absolute text-xl md:text-3xl text-white/40 font-light whitespace-nowrap tracking-widest blur-[1px]"
            style={{ left: f.left, top: f.top }}
            animate={{
              x: [0, f.driftX],
              y: [0, f.driftY],
              opacity: [0, 1, 0], // Flash cycle
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

"use client";
import { motion, useAnimation } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface WhisperedVoicesProps {
  content: {
    voices: Array<{
      quote: string;
      author: string;
      role?: string;
      rating?: number;
    }>;
  };
}

// Separate component for each voice to handle its own randomized loop independently
function SingleVoice({
  voice,
  index
}: {
  voice: { quote: string, author: string, role?: string, rating?: number },
  index: number
}) {
  const controls = useAnimation();
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [drift, setDrift] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let isMounted = true;

    const animateLoop = async () => {
      // Initial random delay before first appearance
      await new Promise(r => setTimeout(r, Math.random() * 3000));

      while (isMounted) {
        // 1. Randomize State for THIS cycle
        // Bias split: odd indices left, even indices right to prevent clustering
        const sideBias = index % 2 === 0 ? "left" : "right";
        const xBase = sideBias === "left"
          ? Math.random() * 35 + 5      // 5-40%
          : Math.random() * 35 + 55;    // 55-90%

        const yBase = Math.random() * 80 + 10; // 10-90%

        setPos({ x: xBase, y: yBase });
        setDrift({
          x: (Math.random() - 0.5) * 30, // Stronger drift 
          y: (Math.random() - 0.5) * 30
        });

        // 2. Randomize Duration
        const duration = 4 + Math.random() * 3; // 4s - 7s

        // 3. Animate In
        await controls.start({
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 1, ease: "easeOut" }
        });

        // 4. Drift (Hold Phase)
        // We animate drift concurrently manually or via a separate control? 
        // Actually controls.start handles the visual state. 
        // Let's do a sequence: fade in -> wait/drift -> fade out.
        // But drift needs to happen continuously.

        // Better approach:
        // Start Drift animation (long duration)
        controls.start({
          x: drift.x,
          y: drift.y,
          transition: { duration: duration, ease: "linear" }
        });

        // Wait for hold time (duration - fade in - fade out)
        const holdTime = (duration - 2) * 1000;
        await new Promise(r => setTimeout(r, holdTime));

        // 5. Animate Out
        await controls.start({
          opacity: 0,
          filter: "blur(10px)",
          transition: { duration: 1, ease: "easeIn" }
        });

        // Reset position transforms immediately after fade out
        controls.set({ x: 0, y: 0 });

        // 6. Wait random interval before next appearance
        const interval = 1000 + Math.random() * 4000;
        await new Promise(r => setTimeout(r, interval));
      }
    };

    animateLoop();

    return () => { isMounted = false; };
  }, [controls, index, drift.x, drift.y]); // drift dependency is tricky, removed from deps to avoid loop reset? 
  // actually inside loop we generate new values.

  return (
    <motion.div
      className="absolute max-w-sm pointer-events-none"
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
      }}
      initial={{ opacity: 0, filter: "blur(10px)", x: 0, y: 0 }}
      animate={controls}
    >
      {/* Rating - LIVING SPARKS */}
      <div className="flex gap-2 mb-4 ml-1 opacity-80">
        {[...Array(voice.rating || 5)].map((_, s) => (
          <motion.div
            key={s}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, delay: s * 0.1, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-4 h-4 text-spark-orange fill-spark-orange/20" />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <p className="text-xl md:text-2xl text-white/90 font-serif italic leading-relaxed mb-4 drop-shadow-2xl">
        "{voice.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 border-l border-white/20 pl-4">
        <div className="flex flex-col">
          <span className="text-white font-medium tracking-wide text-sm">
            {voice.author}
          </span>
          <span className="text-white/40 text-[10px] uppercase tracking-widest mt-0.5">
            {voice.role || "Early Adopter"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function WhisperedVoices({ content }: WhisperedVoicesProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <section className="relative min-h-[100vh] py-32 px-6 overflow-hidden" />;
  }

  // Multiply voices to have more activity if list is short? 
  // Requirement says "same phrases appear in different places".
  // Let's just map the existing list. They loop indefinitely.

  return (
    <section className="relative min-h-[100vh] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 w-full h-[80vh]">
        {content.voices.map((voice, i) => (
          <SingleVoice key={i} voice={voice} index={i} />
        ))}
      </div>
    </section>
  );
}

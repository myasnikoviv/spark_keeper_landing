"use client";
import { motion, useMotionValue, useTransform, animate, MotionValue, motionValue } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface ConstellationProps {
  content: {
    ideas: Array<{ text: string; x: number; y: number }>;
  };
}

// --- SUB-COMPONENTS to fix "Hooks in loop" error ---

// 1. Line Component
// Handles the transformation of X/Y numeric MotionValues into "%" strings for the SVG Line
function ConstellationLine({
  start,
  end
}: {
  start: { x: MotionValue<number>; y: MotionValue<number> };
  end: { x: MotionValue<number>; y: MotionValue<number> };
}) {
  const x1 = useTransform(start.x, v => `${v}%`);
  const y1 = useTransform(start.y, v => `${v}%`);
  const x2 = useTransform(end.x, v => `${v}%`);
  const y2 = useTransform(end.y, v => `${v}%`);

  return (
    <motion.line
      style={{ x1, y1, x2, y2 }}
      stroke="rgba(255, 255, 255, 0.12)"
      strokeWidth="1"
    />
  );
}

// 2. Star Node Component
// Handles the 3D Depth logic (Scale + Blur) via individual useTransforms
function StarNode({
  text,
  mv,
  index
}: {
  text: string;
  mv: { x: MotionValue<number>; y: MotionValue<number>; depth: MotionValue<number> };
  index: number;
}) {
  const xString = useTransform(mv.x, v => `${v}%`);
  const yString = useTransform(mv.y, v => `${v}%`);

  // Sync Scale and Blur based on Depth
  // Depth 0 (Far): Scale 0.8, Blur 2px
  // Depth 1 (Near): Scale 1.1, Blur 0px
  const scale = useTransform(mv.depth, [0, 1], [0.85, 1.15]);
  const blur = useTransform(mv.depth, [0, 1], ["2px", "0px"]);
  const zIndex = useTransform(mv.depth, d => Math.round(d * 10) + 20);

  return (
    <motion.div
      className="absolute"
      style={{
        left: xString,
        top: yString,
        scale: scale,
        filter: blur,
        translateX: "-50%",
        translateY: "-5px", // Anchored to dot center
        zIndex: zIndex
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center cursor-default group">
        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_white] mb-3 group-hover:scale-150 transition-transform duration-300" />
        <p className="text-sm md:text-base font-medium text-white/90 text-shadow-sm whitespace-nowrap group-hover:text-white transition-colors duration-300">
          {text}
        </p>
      </div>
    </motion.div>
  );
}


// --- MAIN COMPONENTS ---

// Spark Component separate to handle its own complex transform logic
function TravelingSpark({
  link,
  nodes
}: {
  link: { from: number; to: number };
  nodes: { x: MotionValue<number>; y: MotionValue<number> }[]
}) {
  const progress = useMotionValue(0);

  const startX = nodes[link.from].x;
  const startY = nodes[link.from].y;
  const endX = nodes[link.to].x;
  const endY = nodes[link.to].y;

  // Explicitly track dependencies for robustness. Using any[] to allow flexible motion value types.
  const x = useTransform([progress, startX, endX], (values: any[]) => {
    const [p, s, e] = values as number[];
    return `${s + (e - s) * p}%`;
  });

  const y = useTransform([progress, startY, endY], (values: any[]) => {
    const [p, s, e] = values as number[];
    return `${s + (e - s) * p}%`;
  });

  useEffect(() => {
    const animation = animate(progress, 1, {
      duration: 2 + Math.random() * 2,
      repeat: Infinity,
      ease: "linear",
      repeatDelay: Math.random() * 3,
      delay: Math.random() * 2
    });
    return () => animation.stop();
  }, [progress]);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white] z-10"
      style={{ left: x, top: y, translateX: "-50%", translateY: "-50%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        times: [0, 0.5, 1],
        repeatDelay: 1
      }}
    />
  );
}


export function Constellation({ content }: ConstellationProps) {
  const [isClient, setIsClient] = useState(false);

  // Safety guard: If no content/ideas, render nothing to prevent crash
  if (!content || !content.ideas) return null;

  // Initialize MotionValues
  // We use `motionValue` factory (NOT a hook) inside useMemo to create stable instances.
  // We DO NOT call useTransform here anymore to avoid "Hook inside Loop" errors.
  const nodeMotionValues = useMemo(() => {
    return content.ideas.map(idea => ({
      x: motionValue(idea.x),
      y: motionValue(idea.y),
      depth: motionValue(0.5), // Start mid-depth
    }));
  }, [content.ideas]); // Stable provided content doesn't change often

  useEffect(() => {
    setIsClient(true);
    const controls: any[] = [];

    content.ideas.forEach((idea, i) => {
      const mv = nodeMotionValues[i];

      // X/Y Drift
      controls.push(animate(mv.x, [idea.x, idea.x - 1, idea.x + 1, idea.x], {
        duration: 8 + Math.random() * 8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: Math.random() * 5
      }));
      controls.push(animate(mv.y, [idea.y, idea.y - 1, idea.y + 1, idea.y], {
        duration: 9 + Math.random() * 8,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: Math.random() * 5
      }));

      // Depth Oscillation (Breathing)
      controls.push(animate(mv.depth, [0.2, 0.8, 0.2], {
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: Math.random() * 2 // Desync depth phase
      }));
    });

    return () => controls.forEach(c => c.stop());
  }, [content.ideas, nodeMotionValues]);

  // Calculate connections (Mesh)
  const connections = useMemo(() => {
    if (!content.ideas) return [];
    const links: { from: number; to: number }[] = [];
    content.ideas.forEach((nodeA, i) => {
      const distances = content.ideas.map((nodeB, j) => {
        if (i === j) return { index: j, dist: Infinity };
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        return { index: j, dist: Math.sqrt(dx * dx + dy * dy) };
      });
      distances.sort((a, b) => a.dist - b.dist);

      // Increased to top 3 to capture Budget <-> Hotels (which is 3rd closest)
      // Added max distance check to avoid cross-map spaghetti
      const nearest = distances.slice(0, 3).filter(d => d.dist < 35);

      nearest.forEach(({ index }) => {
        if (i < index) links.push({ from: i, to: index });
      });
    });
    return links;
  }, [content.ideas]);


  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">

      {/* Background Mask */}
      <div className="absolute inset-0 pointer-events-none z-[41]"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(23, 23, 39, 1) 0%, rgba(23, 23, 39, 0) 60%)" }}
      />

      <div className="relative w-full max-w-6xl h-[900px] z-[42]">

        {/* Pulsing Sun */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="w-24 h-24 rounded-full bg-[#FF6B35] shadow-[0_0_50px_rgba(255,107,53,0.5)] blur-sm opacity-90"
            animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9], boxShadow: ["0 0 50px rgba(255,107,53,0.5)", "0 0 80px rgba(255,107,53,0.8)", "0 0 50px rgba(255,107,53,0.5)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-white blur-xl opacity-20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
        </motion.div>

        {/* CONNECTION LINES */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {connections.map((link, i) => (
            <ConstellationLine
              key={`line-${i}`}
              start={nodeMotionValues[link.from]}
              end={nodeMotionValues[link.to]}
            />
          ))}
        </svg>

        {/* TRAVELING SPARKS */}
        {isClient && connections.map((link, i) => {
          if (i % 2 !== 0 && connections.length > 5) return null;

          // Safety check: Ensure nodes exist before passing motion values
          if (!nodeMotionValues[link.from] || !nodeMotionValues[link.to]) return null;

          return <TravelingSpark key={`spark-${i}`} link={link} nodes={nodeMotionValues} />;
        })}

        {/* IDEAS (Nodes) */}
        {content.ideas.map((idea, i) => (
          <StarNode
            key={i}
            index={i}
            text={idea.text}
            mv={nodeMotionValues[i]}
          />
        ))}
      </div>
    </section>
  );
}

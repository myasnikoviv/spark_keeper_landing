"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

// Separate component for individual magnetic physics
function ReviewCard({
  voice,
  index,
  mouseX,
  mouseY
}: {
  voice: any,
  index: number,
  mouseX: any,
  mouseY: any
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Magnetic Repulsion Logic
  // We compute the "Push" vector based on mouse proximity
  const magnetX = useTransform(mouseX, (x: number) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = x - centerX;
    const distanceY = mouseY.get() - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // Repulsion Radius: 300px
    if (distance < 300) {
      const force = (300 - distance) / 300; // 0 to 1 strength
      return -(distanceX * force * 0.4); // Push away (negative)
    }
    return 0;
  });

  const magnetY = useTransform(mouseY, (y: number) => {
    if (!cardRef.current) return 0;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = mouseX.get() - centerX;
    const distanceY = y - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 300) {
      const force = (300 - distance) / 300;
      return -(distanceY * force * 0.4);
    }
    return 0;
  });

  // Smooth out the magnetic jitter
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springX = useSpring(magnetX, springConfig);
  const springY = useSpring(magnetY, springConfig);

  // Drift Logic
  const driftX = (Math.random() - 0.5) * 40;
  const driftY = (Math.random() - 0.5) * 40;
  const duration = 6 + Math.random() * 4;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      style={{
        x: springX,
        y: springY,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}
    >
      {/* Drift Animation Wrapper */}
      <motion.div
        animate={{
          x: [0, driftX, 0],
          y: [0, driftY, 0]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2
        }}
      >
        {/* Rating */}
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
        <p className="text-xl md:text-2xl text-white/90 font-serif italic leading-relaxed mb-6 drop-shadow-2xl">
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
    </motion.div>
  );
}

export function WhisperedVoices({ content }: WhisperedVoicesProps) {
  const [isClient, setIsClient] = useState(false);
  const mouseX = useMotionValue(-1000); // Start off-screen
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track global mouse over the section
  const handleMouseMove = (e: React.MouseEvent) => {
    // Use client coordinates for simplicity, or relative to container
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  if (!isClient) {
    return <section className="relative min-h-[100vh] py-32 px-6 overflow-hidden" />;
  }

  return (
    <section
      className="relative min-h-screen py-32 px-6 overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {content.voices.map((voice, i) => (
            <ReviewCard
              key={i}
              voice={voice}
              index={i}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

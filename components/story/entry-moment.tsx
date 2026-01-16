"use client";
import { motion } from "framer-motion";

interface EntryMomentProps {
  content: {
    whisper: string;
    subtitle: string;
  };
}

export function EntryMoment({ content }: EntryMomentProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6">
      {/* Deep void - layered darkness */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#171727] via-[#0F0F1A] to-[#171727]" />
      </div>

      {/* The Spark - central presence */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Core spark */}
        <motion.div
          className="relative mb-20" // Reduced mb-32 to mb-20
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* ... (glows stay same) ... */}
          {/* Outer glow layers */}
          <motion.div
            className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            style={{
              background: "radial-gradient(circle, rgba(255,107,53,0.3) 0%, rgba(255,107,53,0) 70%)",
              filter: "blur(60px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Middle glow */}
          <motion.div
            className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            style={{
              background: "radial-gradient(circle, rgba(157,78,221,0.4) 0%, rgba(157,78,221,0) 70%)",
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Core light */}
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] via-[#FF8A5C] to-[#FFA07A]"
            style={{
              boxShadow:
                "0 0 30px rgba(255,107,53,0.8), 0 0 60px rgba(255,107,53,0.5), 0 0 90px rgba(157,78,221,0.3)",
            }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(255,107,53,0.8), 0 0 60px rgba(255,107,53,0.5)",
                "0 0 40px rgba(255,107,53,1), 0 0 80px rgba(255,107,53,0.7), 0 0 120px rgba(157,78,221,0.5)",
                "0 0 30px rgba(255,107,53,0.8), 0 0 60px rgba(255,107,53,0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Whispered text - appears slowly */}
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight" // Reduced mb-12 to mb-8
            style={{
              // Removed Playfair font family
              fontWeight: 600, // Increased weight slightly for sans
              lineHeight: 1.2,
              color: "#E8E8F0",
              textShadow: "0 0 40px rgba(157,78,221,0.3)",
            }}
            animate={{
              opacity: [0.8, 1, 0.8], // Increased min opacity
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {content.whisper}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-200 tracking-wide" // Brighter color
            style={{
              fontWeight: 400, // 300 -> 400
              lineHeight: 1.8,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }} // 0.6 -> 0.9
            transition={{ delay: 2.5, duration: 2 }}
          >
            {content.subtitle}
          </motion.p>
        </motion.div>

        {/* Subtle particles around the spark */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#FF6B35]"
            style={{
              left: "50%",
              top: "50%",
              filter: "blur(1px)",
            }}
            animate={{
              x: [0, Math.cos((i * Math.PI) / 3) * 100, 0],
              y: [0, Math.sin((i * Math.PI) / 3) * 100, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Scroll hint - fades in late */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 4, duration: 2 }}
      >
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-[#9D4EDD] to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}

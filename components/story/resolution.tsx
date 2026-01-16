"use client";
import { motion } from "framer-motion";

interface ResolutionProps {
  content: {
    essence: string;
  };
}

export function Resolution({ content }: ResolutionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
      {/* Calm, organized void */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(23,23,39,1) 0%, rgba(15,15,26,1) 100%)",
          }}
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Central calm presence */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          {/* Soft, stable glow */}
          <div className="relative inline-block">
            <motion.div
              className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#FF6B35]/40 to-[#9D4EDD]/40 mb-16"
              style={{
                boxShadow: "0 0 60px rgba(157,78,221,0.3), 0 0 100px rgba(255,107,53,0.2)",
                filter: "blur(10px)",
              }}
              animate={{
                boxShadow: [
                  "0 0 60px rgba(157,78,221,0.3), 0 0 100px rgba(255,107,53,0.2)",
                  "0 0 80px rgba(157,78,221,0.4), 0 0 120px rgba(255,107,53,0.3)",
                  "0 0 60px rgba(157,78,221,0.3), 0 0 100px rgba(255,107,53,0.2)",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Essence text - calm, resolved */}
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl leading-relaxed max-w-3xl mx-auto"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 300,
              color: "#E8E8F0",
              textShadow: "0 0 30px rgba(157,78,221,0.2)",
            }}
            animate={{
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {content.essence}
          </motion.p>
        </motion.div>

        {/* Organized light structure - subtle geometry */}
        <div className="relative h-64">
          {/* Horizontal planes of calm */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#9D4EDD]/10 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                width: `${80 - i * 10}%`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                ease: "easeOut",
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
            />
          ))}
        </div>

        {/* Ambient calm glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(157,78,221,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}

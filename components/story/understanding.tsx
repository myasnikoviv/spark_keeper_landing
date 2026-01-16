"use client";
import { motion } from "framer-motion";

interface UnderstandingProps {
  content: {
    title: string;
    essence: string;
  };
}

export function Understanding({ content }: UnderstandingProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <div className="relative max-w-5xl w-full">
        {/* Spark Keeper - revealed through light, not explained */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 3 }}
        >
          <motion.div
            className="inline-block mb-12"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2
              className="text-4xl md:text-5xl tracking-wide"
              style={{
                fontWeight: 600,
                color: "#E8E8F0",
                textShadow: "0 0 30px rgba(157,78,221,0.4)",
              }}
            >
              {content.title}
            </h2>
          </motion.div>

          <motion.p
            className="text-2xl md:text-3xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
            style={{
              fontWeight: 400,
              lineHeight: 1.8,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 2 }}
          >
            {content.essence}
          </motion.p>
        </motion.div>

        {/* Visual absorption - inputs becoming structure */}
        <div className="relative h-96">
          {/* Different input types appearing and dissolving */}
          {["voice", "text", "link", "image"].map((type, i) => (
            <motion.div
              key={type}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: "10%",
              }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: [0, 1, 0.5], y: [0, 100, 150] }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 3 + i, // Varied duration
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              <p
                className="text-lg text-[#00D4FF]" // Removed opacity/60
                style={{
                  textShadow: "0 0 15px rgba(0,212,255,0.6)",
                }}
              >
                {type}
              </p>
            </motion.div>
          ))}

          {/* Central transformation zone */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"
            style={{
              background:
                "radial-gradient(circle, rgba(255,107,53,0.2) 0%, rgba(157,78,221,0.1) 50%, transparent 70%)",
              filter: "blur(30px)",
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Structured output emerging below */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: [0, 0.4, 0.3], y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 3,
                  delay: 2 + i * 0.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                <div
                  className="h-px bg-gradient-to-r from-transparent via-[#9D4EDD]/30 to-transparent"
                  style={{
                    filter: "blur(1px)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Depth layers - showing structure emerging from chaos */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 50% ${30 + i * 20}%, rgba(${i % 2 === 0 ? "157,78,221" : "0,212,255"
                  },0.05) 0%, transparent 60%)`,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5 + i,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

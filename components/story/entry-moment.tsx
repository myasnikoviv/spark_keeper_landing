"use client";
import { motion } from "framer-motion";

interface EntryMomentProps {
  content: {
    h1: string;
  };
}

export function EntryMoment({ content }: EntryMomentProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6">
      {/* Deep void - Removed to show global particles layer */}
      {/* <div className="absolute inset-0">
         <div className="absolute inset-0 bg-gradient-to-b from-[#171727] via-[#0F0F1A] to-[#171727]" />
      </div> */ }

      {/* The Spark - central presence */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Core spark - breathes slowly */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          {/* Outer glow */}
          <motion.div
            className="absolute inset-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            style={{
              background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(255,107,53,0) 70%)",
              filter: "blur(60px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Core light */}
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B35] via-[#FF8A5C] to-[#FFA07A]"
            style={{
              boxShadow: "0 0 30px rgba(255,107,53,0.6), 0 0 60px rgba(255,107,53,0.3)",
            }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(255,107,53,0.6), 0 0 60px rgba(255,107,53,0.3)",
                "0 0 40px rgba(255,107,53,0.8), 0 0 80px rgba(255,107,53,0.5)",
                "0 0 30px rgba(255,107,53,0.6), 0 0 60px rgba(255,107,53,0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* H1 Title - Emerges from darkness */}
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 1, duration: 3, ease: "easeOut" }}
        >
          <h1
            className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight md:leading-[1.1] text-shadow-glow"
            style={{
              fontWeight: 600,
              color: "#E8E8F0",
            }}
          >
            {content.h1}
          </h1>
        </motion.div>
      </div>
    </section>
  );
}

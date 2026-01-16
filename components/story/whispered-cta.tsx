"use client";
import { motion } from "framer-motion";

interface WhisperedCTAProps {
  content: {
    invitation: string;
    comingSoon: string;
  };
}

export function WhisperedCTA({ content }: WhisperedCTAProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <div className="relative text-center max-w-3xl">
        {/* Subtle presence */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          {/* Small spark */}
          <motion.div
            className="w-12 h-12 mx-auto mb-12 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#9D4EDD]"
            style={{
              boxShadow: "0 0 40px rgba(255,107,53,0.4), 0 0 80px rgba(157,78,221,0.3)",
              filter: "blur(8px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Invitation - whispered */}
          <motion.p
            className="text-4xl md:text-5xl mb-20 text-white"
            style={{
              fontWeight: 600,
              textShadow: "0 0 20px rgba(157,78,221,0.2)",
              lineHeight: 1.4,
            }}
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {content.invitation}
          </motion.p>

          {/* App badges - passive, disabled */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* App Store */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 2 }}
            >
              <div className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  {/* Apple icon - simplified, no lucide */}
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">{content.comingSoon}</div>
                    <div className="text-sm text-white font-medium">App Store</div>
                  </div>
                </div>
              </div>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl"
                  style={{
                    background: "radial-gradient(ellipse, rgba(157,78,221,0.3) 0%, transparent 70%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Google Play */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 2 }}
            >
              <div className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  {/* Play icon - simplified */}
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zM16.81 15.12l-3.12-1.8-2.28 2.28 5.4 3.11c.47-.25.77-.75.77-1.29 0-.54-.3-1.04-.77-1.3zM13.69 12L3.84 2.15c.5-.24 1.11-.16 1.55.23l11.42 6.58L13.69 12zm3.12-3.12c.47.26.77.76.77 1.3 0 .54-.3 1.04-.77 1.29l-3.12-1.8 2.28-2.28.84.49z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">{content.comingSoon}</div>
                    <div className="text-sm text-white font-medium">Google Play</div>
                  </div>
                </div>
              </div>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl"
                  style={{
                    background: "radial-gradient(ellipse, rgba(0,212,255,0.15) 0%, transparent 70%)",
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Afterthought text */}
          <motion.p
            className="text-sm text-[#9B9BAC]/40 tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 2 }}
            style={{
              fontWeight: 300,
              letterSpacing: "0.2em",
            }}
          >
            You may enter later
          </motion.p>
        </motion.div>

        {/* Final fade to void */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent 0%, rgba(15,15,26,1) 100%)",
          }}
        />
      </div>
    </section>
  );
}

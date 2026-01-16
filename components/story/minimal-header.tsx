"use client";
import { motion } from "framer-motion";

interface MinimalHeaderProps {
  language: "en" | "es" | "ua";
  onLanguageChange: (lang: "en" | "es" | "ua") => void;
}

export function MinimalHeader({ language, onLanguageChange }: MinimalHeaderProps) {
  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "ua", label: "UA" },
  ] as const;

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - subtle, no icon */}
        <motion.div
          className="flex items-center gap-3"
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span
            className="text-lg tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              color: "#E8E8F0",
              textShadow: "0 0 20px rgba(157,78,221,0.3)",
            }}
          >
            Spark Keeper
          </span>
        </motion.div>

        {/* Language switcher - minimal */}
        <div className="flex items-center gap-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              className={`px-3 py-1.5 text-xs tracking-wider transition-all duration-500 ${
                language === lang.code
                  ? "text-[#E8E8F0]"
                  : "text-[#9B9BAC]/40 hover:text-[#9B9BAC]/70"
              }`}
              style={{
                fontWeight: 300,
                letterSpacing: "0.15em",
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(157,78,221,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </motion.header>
  );
}

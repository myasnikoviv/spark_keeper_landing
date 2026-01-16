"use client";

import { motion } from "framer-motion";
import StoreButtons from "@/components/StoreButtons";

interface VisualCTAProps {
    content: {
        title: string;
        subtitle: string;
        micro?: string;
        appStore?: string;
        googlePlay?: string;
        disabled?: boolean;
    };
    delay?: number;
    className?: string;
}

export function VisualCTA({ content, delay = 0, className = "" }: VisualCTAProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: "easeOut", delay }}
            className={`relative z-20 flex flex-col items-center text-center py-16 ${className}`}
        >
            {/* Ambient Glow Backend - LIVING (Amplify) */}
            <motion.div
                className="absolute inset-0 bg-spark-orange/20 blur-[100px] rounded-full pointer-events-none"
                animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.9, 1.2, 0.9],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Main Content */}
            <h3 className="text-3xl md:text-4xl font-light text-white mb-2 tracking-tight">
                {content.title}
            </h3>

            <p className="text-white/60 text-lg mb-8 font-light">
                {content.subtitle}
            </p>

            {/* Interactive Store Buttons Container */}
            <div className="relative group">
                <div className="absolute -inset-4 bg-spark-orange/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <StoreButtons />
            </div>

            {/* Micro Copy */}
            {content.micro && (
                <p className="mt-6 text-white/30 text-sm tracking-wide uppercase">
                    {content.micro}
                </p>
            )}
        </motion.div>
    );
}

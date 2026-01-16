"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";

interface VideoShowcaseProps {
    content: {
        h2: string;
        videoUrl: string;
    };
}

export function VideoShowcase({ content }: VideoShowcaseProps) {
    return (
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl font-light text-white/90 tracking-tight text-center mb-16 text-shadow-glow"
            >
                {content.h2}
            </motion.h2>

            {/* Portal Frame Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative w-full aspect-video md:aspect-[2.35/1] rounded-2xl p-[1px] group cursor-pointer"
            >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-spark-orange/50 to-transparent opacity-50 blur-sm animate-pulse-slow" />
                <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-spark-purple via-spark-orange to-spark-purple opacity-30 group-hover:opacity-100 transition-opacity duration-1000"
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    style={{ backgroundSize: "200% 200%" }}
                />

                {/* Main Content Area */}
                <div className="relative h-full bg-[#050508] rounded-2xl overflow-hidden flex items-center justify-center border border-white/5">

                    {/* Inner Particles (Portal Effect) */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-spark-orange rounded-full"
                                style={{
                                    left: "50%",
                                    top: "50%",
                                }}
                                animate={{
                                    x: [Math.random() * 400 - 200, Math.random() * 800 - 400],
                                    y: [Math.random() * 200 - 100, Math.random() * 400 - 200],
                                    opacity: [0, 0.8, 0],
                                    scale: [0, 1.5, 0]
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "easeOut"
                                }}
                            />
                        ))}
                    </div>

                    {/* Placeholder for Video / Play Button */}
                    <motion.div
                        className="relative z-20 w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(255,107,53,0.3)]"
                        whileHover={{ boxShadow: "0 0 50px rgba(255,107,53,0.6)" }}
                    >
                        <Play className="w-8 h-8 text-white fill-white ml-2" />

                        {/* Ring around button */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-dashed border-white/30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>

                    {/* Screen Label */}
                    <div className="absolute top-8 left-8 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-mono text-white/50 tracking-widest uppercase">Live Portal</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

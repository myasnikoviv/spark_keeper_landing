"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface Step {
    title: string;
    description: string;
    image: string;
}

interface HowItWorksGalleryProps {
    content: {
        h2: string;
        steps: Step[];
    };
}

export function HowItWorksGallery({ content }: HowItWorksGalleryProps) {
    return (
        <section className="relative w-full max-w-7xl mx-auto px-6 py-32 flex flex-col gap-32">
            <motion.h2
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="text-4xl md:text-6xl font-light text-white/90 tracking-tight text-center text-shadow-glow sticky top-32 z-0 opacity-20 pointer-events-none"
            >
                {content.h2}
            </motion.h2>

            <div className="flex flex-col gap-48 relative z-10">
                {content.steps.map((step, index) => (
                    <ParallaxStep key={index} step={step} index={index} />
                ))}
            </div>
        </section>
    );
}

function ParallaxStep({ step, index }: { step: Step; index: number }) {
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div ref={ref} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? "" : "md:flex-row-reverse"}`}>
            {/* Text Side */}
            <motion.div
                className="flex-1 flex flex-col gap-6"
                style={{ opacity }}
            >
                <span className="text-spark-orange font-mono text-sm tracking-[0.2em] uppercase">
                    0{index + 1}
                </span>
                <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight">
                    {step.title}
                </h3>
                <p className="text-xl text-white/60 font-light leading-relaxed max-w-md">
                    {step.description}
                </p>
            </motion.div>

            {/* Image Side (Floating Parallax) */}
            <motion.div
                className="flex-1 relative"
                style={{ y }}
            >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D0D12]">
                    {/* Glow behind */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${isEven ? 'from-spark-orange/20' : 'from-spark-purple/20'} to-transparent blur-3xl opacity-30`} />

                    {/* Image Container */}
                    <div className="relative w-full h-full flex items-center justify-center bg-white/5 backdrop-blur-sm">
                        {/* Placeholder for real screenshot */}
                        <div className="text-center">
                            <span className="text-6xl opacity-20 block mb-4">{step.title[0]}</span>
                            <span className="text-xs uppercase tracking-widest opacity-40">Screen: {step.title}</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

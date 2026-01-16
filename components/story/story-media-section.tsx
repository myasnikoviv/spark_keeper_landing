"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface StoryMediaSectionProps {
    content: {
        title: string;
        subtitle: string;
    };
}

export function StoryMediaSection({ content }: StoryMediaSectionProps) {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-20 md:py-32">
            <div className="relative max-w-6xl w-full text-center">

                {/* Title */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                >
                    <h3 className="text-3xl md:text-5xl font-medium text-white mb-6 text-shadow-glow">
                        {content.title}
                    </h3>
                    <p className="text-xl text-gray-300 font-light">
                        {content.subtitle}
                    </p>
                </motion.div>

                {/* Screenshot Container */}
                <motion.div
                    className="relative mx-auto max-w-4xl"
                    initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ perspective: "1000px" }}
                >
                    {/* Glow behind */}
                    <div className="absolute inset-0 -inset-10 bg-gradient-to-r from-electric-blue/20 via-neon-violet/20 to-warm-orange/20 blur-3xl rounded-3xl -z-10" />

                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F0F1A]/80 backdrop-blur-sm">
                        <Image
                            src="/images/app-screenshot.png"
                            alt="Spark Keeper App Interface"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                        />

                        {/* Screen Reflection/Gloss */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

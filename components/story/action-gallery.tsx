"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Map, CheckCircle } from "lucide-react";

interface ActionItem {
    title: string;
    description: string;
    image: string;
}

interface ActionGalleryProps {
    content: {
        h2: string;
        items: ActionItem[];
    };
}

export function ActionGallery({ content }: ActionGalleryProps) {
    return (
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-light text-white/90 tracking-tight text-shadow-glow">
                    {content.h2}
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.items.map((item, index) => (
                    <ActionCard key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}

function ActionCard({ item, index }: { item: ActionItem; index: number }) {
    const icons = [Map, Sparkles, CheckCircle];
    const Icon = icons[index % icons.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative h-[400px] rounded-3xl overflow-hidden transition-all duration-500"
        >
            {/* Minimal Glow Rim instead of border */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-white/30 transition-all duration-500" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] group-hover:shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500" />

            {/* Background Image / Placeholder (Darker/De-saturated) */}
            <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-br from-transparent to-white/5 ${index === 0 ? "via-blue-500/10" : index === 1 ? "via-purple-500/10" : "via-emerald-500/10"}`} />

            {/* Content Overlay - Floating */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col gap-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-spark-orange/50 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-white group-hover:text-spark-orange transition-colors" />
                    </div>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <div>
                    <h3 className="text-2xl font-light text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 font-light leading-relaxed text-sm">
                        {item.description}
                    </p>
                </div>

                <div className="flex items-center gap-2 text-spark-orange text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <span>See flow</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
}

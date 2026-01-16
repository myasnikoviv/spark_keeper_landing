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
            className="group relative h-[400px] rounded-3xl overflow-hidden bg-[#0D0D12] border border-white/10 hover:border-white/20 transition-all duration-500"
        >
            {/* Background Image / Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 font-light leading-relaxed">
                        {item.description}
                    </p>
                </div>

                <div className="flex items-center gap-2 text-spark-orange text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                    <span>See flow</span>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>

            {/* Abstract visual background for now */}
            <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity ${index === 0 ? "bg-blue-500" : index === 1 ? "bg-purple-500" : "bg-emerald-500"
                }`} />
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-120 brightness-100" />
        </motion.div>
    );
}

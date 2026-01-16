"use client";

import { motion } from "framer-motion";

interface FAQItem {
    q: string;
    a: string;
}

interface FAQSectionProps {
    content: {
        h2: string;
        items: FAQItem[];
    };
}

export function FAQSection({ content }: FAQSectionProps) {
    return (
        <section className="relative z-10 w-full max-w-3xl mx-auto px-6 py-32">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                className="text-white/40 text-sm tracking-widest uppercase mb-16 text-center"
            >
                {content.h2}
            </motion.h2>

            <div className="space-y-12">
                {content.items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-5%" }}
                        transition={{ duration: 0.8, delay: index * 0.05 }}
                        className="border-l border-white/10 pl-6 group hover:border-spark-orange/50 transition-colors duration-500"
                    >
                        <h3 className="text-xl text-white/90 mb-3 font-medium group-hover:text-white transition-colors">
                            {item.q}
                        </h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            {item.a}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProblemSection() {
    const t = useTranslations('problem');
    // Using a ref for the container to trigger animations when section is in view
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    // Define scenarios with explicit spans for Bento Grid
    const scenarios = [
        { id: 'travel', span: 'md:col-span-2' },
        { id: 'gifts', span: 'md:col-span-1' },
        { id: 'movies', span: 'md:col-span-1' },
        { id: 'reading', span: 'md:col-span-2' },
        { id: 'thoughts', span: 'md:col-span-3' },
    ];

    return (
        <section id="problem" ref={ref} className="py-24 px-6 bg-deep-void">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="font-serif text-4xl md:text-6xl text-center mb-16 text-white"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    {t('title')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {scenarios.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`relative p-8 rounded-3xl bg-surface/40 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all group overflow-hidden ${item.span}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative z-10">
                                <div className="text-5xl mb-6 opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 origin-left">
                                    {t(`scenarios.${item.id}.emoji`)}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">
                                    {t(`scenarios.${item.id}.title`)}
                                </h3>
                                <p className="text-foreground/60 leading-relaxed max-w-sm">
                                    {t(`scenarios.${item.id}.description`)}
                                </p>
                            </div>

                            {/* Decorative gradient blob */}
                            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-electric-blue/5 rounded-full blur-[60px] group-hover:bg-electric-blue/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="font-serif text-2xl md:text-4xl text-center mt-20 text-white/50 italic"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    "{t('tagline')}"
                </motion.p>
            </div>
        </section>
    );
}

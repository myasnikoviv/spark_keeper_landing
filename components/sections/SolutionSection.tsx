'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function SolutionSection() {
    const t = useTranslations('solution');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const features = ['capture', 'understand', 'connect', 'act'];

    return (
        <section id="solution" ref={ref} className="py-24 px-6 relative bg-deep-void">
            {/* Subtle background noise/gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spark-purple/5 to-transparent pointer-events-none opacity-30" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-serif text-4xl md:text-6xl mb-6 text-white">
                        {t('title')}
                    </h2>
                    <p className="text-xl md:text-2xl text-foreground/60 font-light max-w-2xl mx-auto">
                        {t('tagline')}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature}
                            className="p-10 rounded-3xl bg-surface/30 backdrop-blur-sm border border-white/5 hover:border-d-white/10 hover:bg-surface/50 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 text-electric-blue">
                                {index === 0 && (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                                    </svg>
                                )}
                                {index === 1 && (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                )}
                                {index === 2 && (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                )}
                                {index === 3 && (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )}
                            </div>
                            <h3 className="font-serif text-2xl md:text-3xl mb-4 text-white">
                                {t(`features.${feature}.title`)}
                            </h3>
                            <p className="text-foreground/60 leading-relaxed text-lg font-light">
                                {t(`features.${feature}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="font-serif text-2xl md:text-3xl text-center text-white/40 italic"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {t('emphasis')}
                </motion.p>
            </div>
        </section>
    );
}

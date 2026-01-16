'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function HowItWorksSection() {
    const t = useTranslations('howItWorks');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const steps = ['capture', 'process', 'connect', 'action'];

    return (
        <section id="how-it-works" ref={ref} className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t('title')}
                </motion.h2>

                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step}
                            className="flex flex-col md:flex-row items-center gap-8"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 * index }}
                        >
                            <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                <div className="text-6xl font-bold text-spark-orange/20 mb-4">
                                    {t(`steps.${step}.number`)}
                                </div>
                                <h3 className="text-3xl font-bold mb-4">
                                    {t(`steps.${step}.title`)}
                                </h3>
                                <p className="text-lg text-foreground/70 leading-relaxed">
                                    {t(`steps.${step}.description`)}
                                </p>
                            </div>

                            <div className={`flex-1 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                <div className="relative aspect-square max-w-sm mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-br from-spark-orange/20 to-spark-purple/20 rounded-3xl blur-2xl" />
                                    <div className="relative h-full rounded-3xl glass border border-spark-orange/20 flex items-center justify-center">
                                        {index === 0 && (
                                            <svg className="w-24 h-24 text-spark-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg className="w-24 h-24 text-spark-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg className="w-24 h-24 text-spark-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg className="w-24 h-24 text-spark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

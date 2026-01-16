'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function TestimonialsSection() {
    const t = useTranslations('testimonials');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const testimonials = ['mental', 'action', 'peace'];

    return (
        <section ref={ref} className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t('title')}
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item}
                            className="p-8 rounded-2xl glass border border-spark-purple/20 hover:border-spark-purple/40 transition-all"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                        >
                            <div className="mb-6">
                                <svg className="w-10 h-10 text-spark-purple/40" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>
                            <p className="text-lg text-foreground/90 mb-6 leading-relaxed italic">
                                "{t(`items.${item}.quote`)}"
                            </p>
                            <p className="text-sm text-foreground/50">
                                — {t(`items.${item}.author`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

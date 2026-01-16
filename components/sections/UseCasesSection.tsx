'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function UseCasesSection() {
    const t = useTranslations('useCases');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const cases = ['travel', 'gifts', 'media', 'reading', 'work', 'personal'];

    return (
        <section id="use-cases" ref={ref} className="py-24 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-spark-blue/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {t('title')}
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cases.map((useCase, index) => (
                        <motion.div
                            key={useCase}
                            className="p-6 rounded-2xl glass hover:bg-surface-elevated transition-all group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                        >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                {t(`cases.${useCase}.emoji`)}
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                {t(`cases.${useCase}.title`)}
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <div className="text-sm text-foreground/50 mb-1">Problem:</div>
                                    <p className="text-foreground/70">
                                        {t(`cases.${useCase}.problem`)}
                                    </p>
                                </div>
                                <div className="h-px bg-gradient-to-r from-transparent via-spark-orange/30 to-transparent" />
                                <div>
                                    <div className="text-sm text-spark-orange mb-1">Solution:</div>
                                    <p className="text-foreground/90">
                                        {t(`cases.${useCase}.solution`)}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

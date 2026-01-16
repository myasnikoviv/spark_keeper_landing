'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import Image from 'next/image';

export default function CoachSection() {
    const t = useTranslations('coach');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-spark-orange/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-2xl text-spark-orange font-semibold">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-64 h-64 mx-auto">
                            <div className="absolute inset-0 bg-spark-orange/30 rounded-full blur-3xl animate-pulse" />
                            <Image
                                src="/images/sparky-coach.png"
                                alt="Sparky - Your Fire Coach"
                                width={256}
                                height={256}
                                className="relative z-10 drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-1 space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            {t('description')}
                        </p>

                        <div className="p-6 rounded-2xl glass border border-spark-orange/30">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-spark-orange to-spark-yellow flex items-center justify-center text-2xl">
                                    🔥
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{t('sparky.name')}</h3>
                                    <p className="text-sm text-foreground/60">{t('sparky.role')}</p>
                                </div>
                            </div>
                            <p className="text-foreground/70 italic">
                                "{t('sparky.personality')}"
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import Image from 'next/image';

export default function MediaSection() {
    const t = useTranslations('media');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-foreground/60">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    className="relative max-w-2xl mx-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-spark-orange/30 to-spark-purple/30 rounded-3xl blur-3xl" />
                    <div className="relative p-4 rounded-3xl glass border border-spark-orange/20">
                        <Image
                            src="/images/app-screenshot.png"
                            alt="Spark Keeper App Screenshot"
                            width={800}
                            height={1600}
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-foreground/50 text-sm">
                        * App interface shown is representative. Final design may vary.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

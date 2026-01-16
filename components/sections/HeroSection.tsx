'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SparkEffect from '../SparkEffect';
import StoreButtons from '../StoreButtons';

export default function HeroSection() {
    const t = useTranslations('hero');

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-deep-void">
            <SparkEffect />

            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-violet/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '5s' }} />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.h1
                    className="font-serif text-5xl md:text-8xl font-medium mb-8 text-white tracking-tight drop-shadow-[0_0_30px_rgba(77,171,247,0.2)]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {t('headline')}
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {t('subheadline')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <StoreButtons variant="large" />
                </motion.div>
            </div>
        </section>
    );
}

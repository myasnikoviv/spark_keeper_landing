'use client';

import { useTranslations } from 'next-intl';
import Footer from '@/components/Footer';

export default function SupportPage() {
    const t = useTranslations('support');

    return (
        <main className="relative min-h-screen bg-spark-black selection:bg-spark-orange/30 overflow-x-hidden flex flex-col">
            {/* Background elements to match main page vibe */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-spark-orange/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="flex-grow flex items-center justify-center relative z-10 px-6 py-24">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-light text-white tracking-tight">
                            {t('title')}
                        </h1>
                        <p className="text-white/60 text-lg">
                            {t('intro')}
                        </p>
                    </div>

                    <div className="space-y-6 text-white/80 leading-relaxed text-sm bg-white/5 p-6 rounded-xl border border-white/5">
                        <h2 className="text-xl font-medium text-white">{t('deleteAccount.title')}</h2>
                        <p>{t('deleteAccount.p1')}</p>
                        <ol className="list-decimal pl-5 space-y-2 marker:text-spark-orange">
                            <li>{t('deleteAccount.step1')}</li>
                            <li>{t('deleteAccount.step2')}</li>
                            <li>{t('deleteAccount.step3')}</li>
                        </ol>
                        <p>{t('deleteAccount.p2')}</p>
                    </div>

                    <form
                        action="https://formspree.io/f/mdaaqjed"
                        method="POST"
                        className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
                    >
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-white/60">
                                {t('email')}
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-spark-orange/50 focus:border-spark-orange/50 outline-none transition-all text-white placeholder:text-white/20"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-white/60">
                                {t('message')}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-spark-orange/50 focus:border-spark-orange/50 outline-none transition-all text-white resize-none placeholder:text-white/20"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 px-6 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {t('send')}
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </main>
    );
}

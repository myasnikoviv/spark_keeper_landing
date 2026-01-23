'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');
    const locale = useLocale();

    return (
        <footer className="relative pb-10 pt-10 text-center border-t border-white/5 bg-spark-black">
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-6 text-sm text-white/40">
                    <Link href={`/${locale}/support`} className="hover:text-white transition-colors">
                        {t('supportLink')}
                    </Link>
                </div>
                <p className="text-white/20 text-sm">
                    {t('copyright')}
                </p>
            </div>
        </footer>
    );
}

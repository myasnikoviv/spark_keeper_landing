'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="py-12 px-6 border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-4">
                    <p className="text-lg text-foreground/60 italic">
                        {t('tagline')}
                    </p>
                    <p className="text-sm text-foreground/40">
                        {t('copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
}

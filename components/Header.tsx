'use client';

import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
    const t = useTranslations();
    const pathname = usePathname();
    const router = useRouter();

    const scrollToSection = (id: string) => {
        // Remove the locale prefix to check if we are on home page
        // e.g., /en, /ua, /es
        const isHomePage = pathname === '/en' || pathname === '/ua' || pathname === '/es' || pathname === '/';

        if (isHomePage) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to home with hash
            // We need to keep the current locale
            const currentLocale = pathname.split('/')[1];
            router.push(`/${currentLocale}/#${id}`);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-[2px]">
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <Image
                            src="/images/spark-logo.png"
                            alt="Spark Keeper"
                            width={40}
                            height={40}
                            className="drop-shadow-[0_0_15px_rgba(255,107,53,0.6)]"
                        />
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <button
                        onClick={() => scrollToSection('problem')}
                        className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                        {t('nav.problem')}
                    </button>
                    <button
                        onClick={() => scrollToSection('solution')}
                        className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                        {t('nav.solution')}
                    </button>
                    <button
                        onClick={() => scrollToSection('howItWorks')}
                        className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                        {t('nav.howItWorks')}
                    </button>
                    <button
                        onClick={() => scrollToSection('useCases')}
                        className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                        {t('nav.useCases')}
                    </button>
                </nav>

                <LanguageSwitcher />
            </div>
        </header>
    );
}

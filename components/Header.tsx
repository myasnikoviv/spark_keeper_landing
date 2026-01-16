'use client';

import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-[2px]">
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image
                        src="/images/spark-logo.png"
                        alt="Spark Keeper"
                        width={40}
                        height={40}
                        className="drop-shadow-[0_0_15px_rgba(255,107,53,0.6)]"
                    />
                    <span className="text-xl font-bold gradient-text">Spark Keeper</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <button
                        onClick={() => scrollToSection('problem')}
                        className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                        Problem
                    </button>
                    <button
                        onClick={() => scrollToSection('solution')}
                        className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                        Solution
                    </button>
                    <button
                        onClick={() => scrollToSection('how-it-works')}
                        className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                        How It Works
                    </button>
                    <button
                        onClick={() => scrollToSection('use-cases')}
                        className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    >
                        Use Cases
                    </button>
                </nav>

                <LanguageSwitcher />
            </div>
        </header>
    );
}

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import Header from '@/components/Header';
import { FloatingParticles } from '@/components/story/floating-particles';
import "../globals.css";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Spark Keeper - Your Second Brain",
    description: "Capture anything. AI organizes everything. Never lose what matters. Turn scattered thoughts into structured knowledge and meaningful actions.",
    keywords: ["AI", "knowledge management", "second brain", "note taking", "productivity", "personal knowledge", "AI assistant"],
    authors: [{ name: "Spark Keeper" }],
    openGraph: {
        title: "Spark Keeper - Your Second Brain",
        description: "Capture anything. AI organizes everything. Never lose what matters.",
        type: "website",
        locale: "en_US",
        siteName: "Spark Keeper",
    },
    twitter: {
        card: "summary_large_image",
        title: "Spark Keeper - Your Second Brain",
        description: "Capture anything. AI organizes everything. Never lose what matters.",
    },
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    let messages;
    try {
        messages = await getMessages({ locale });
    } catch (error) {
        console.error('Error loading messages:', error);
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.variable} antialiased font-sans`} suppressHydrationWarning>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <FloatingParticles />
                    <Header />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

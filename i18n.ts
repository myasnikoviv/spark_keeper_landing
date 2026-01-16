import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en', 'es', 'ua'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
    // Provide a default locale if none is found (fixes 404 on internal requests)
    const effectiveLocale = locale || 'en';

    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(effectiveLocale as Locale)) notFound();

    return {
        locale: effectiveLocale,
        messages: (await import(`./messages/${effectiveLocale}.json`)).default
    };
});

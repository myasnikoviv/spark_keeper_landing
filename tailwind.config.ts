import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['var(--font-playfair)'],
                sans: ['var(--font-inter)'],
            },
            colors: {
                'deep-void': '#171727',
                'electric-blue': '#4DABF7',
                'neon-violet': '#9775FA',
                'spark-orange': '#FF6B35',
                'spark-yellow': '#F7931E',
                'spark-purple': '#9D4EDD',
                'surface': '#1F1F2E',
                'surface-elevated': '#2A2A3C',
            },
        },
    },
    plugins: [],
};
export default config;

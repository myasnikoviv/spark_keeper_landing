"use client";

import { useTranslations } from 'next-intl';
import Footer from '@/components/Footer';
import { EntryMoment } from '@/components/story/entry-moment';
import { FragmentedReality } from '@/components/story/fragmented-reality';
import { Understanding } from '@/components/story/understanding';
import { Presence } from '@/components/story/presence';
import { WhisperedVoices } from '@/components/story/whispered-voices';
import { Resolution } from '@/components/story/resolution';
import { Constellation } from '@/components/story/constellation';
import { VisualCTA } from '@/components/story/visual-cta';
import { DemoScenarios } from '@/components/story/demo-scenarios';
import { FAQSection } from '@/components/story/faq-section';
import { HowItWorksGallery } from '@/components/story/how-it-works-gallery';
import { VideoShowcase } from '@/components/story/video-showcase';
import { TrustSignals } from '@/components/story/trust-signals';
import { Transformation } from '@/components/story/transformation';
import { MemoriesReturning } from '@/components/story/memories-returning';
import { WhisperedCTA } from '@/components/story/whispered-cta';

export default function Home() {
    const t = useTranslations('story');
    const globalCta = useTranslations('cta');

    // Construct content object from translations
    const content = {
        hero: {
            h1: t('hero.h1'),
        },
        problem: {
            h2: t('problem.h2'),
            p1: t('problem.p1'),
            p2: t('problem.p2'),
            fragments: t.raw('problem.fragments') as string[],
        },
        solution: {
            h2: t('solution.h2'),
            p1: t('solution.p1'),
            ctaSlot: {
                title: t('solution.ctaSlot.title'),
                subtitle: t('solution.ctaSlot.subtitle'),
            }
        },
        transformation: {
            fragments: t.raw('problem.fragments') as string[],
        },
        howItWorks: {
            h2: t('howItWorksGallery.h2'),
            steps: t.raw('howItWorksGallery.steps') as any[]
        },
        demos: {
            h2: t('demos.h2'),
            scenarios: t.raw('demos.scenarios') as any[],
        },
        memories: {
            // Using useCases content for MemoriesReturning (closest match)
            items: t.raw('useCases.items') as any[],
        },
        constellation: {
            intro: t('constellation.intro'),
            ideas: t.raw('constellation.ideas') as any[]
        },
        video: {
            h2: t('videoShowcase.h2'),
            videoUrl: t('videoShowcase.videoUrl'),
        },
        coach: {
            h2: t('coach.h2'),
            p1: t('coach.p1'),
        },
        metrics: {
            activeUsers: t('metrics.activeUsers'),
            rating: t('metrics.rating'),
            privacy: t('metrics.privacy')
        },
        faq: {
            h2: t('faq.h2'),
            items: t.raw('faq.items') as any[]
        },
        testimonials: {
            items: t.raw('testimonials.items') as any[]
        },
        resolution: {
            essence: t('resolution.essence')
        },
        footer: {
            h2: t('footer.h2'),
            copyright: t('footer.copyright'),
            cta: {
                title: globalCta('title'),
                subtitle: globalCta('subtitle'),
                disabled: true
            }
        }
    };

    return (
        <main className="relative min-h-screen bg-spark-black selection:bg-spark-orange/30 overflow-x-hidden">

            {/* BLOCK 1: HEADER is layout-level */}

            {/* BLOCK 2: HERO / ENTRY */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center">
                <EntryMoment content={{ h1: content.hero.h1 }} />
            </section>

            {/* BLOCK 3: PROBLEM (VERBAL) - Text Only */}
            <section className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 text-center">
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
                    {content.problem.h2}
                </h2>
                <div className="space-y-6 text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
                    <p>{content.problem.p1}</p>
                    <p>{content.problem.p2}</p>
                </div>
            </section>

            {/* BLOCK 4: PROBLEM (VISUAL) - Fragments Only */}
            <div className="relative">
                <FragmentedReality content={content.problem} visualOnly={true} />
            </div>

            {/* BLOCK 5: SOLUTION (VERBAL) */}
            <Understanding content={{ h2: content.solution.h2, p1: content.solution.p1 }} />

            {/* BLOCK 6: SOLUTION (TRANSFORMATION) */}
            <Transformation content={content.transformation} />

            {/* BLOCK 7: UNDERSTANDING (Optional/Redundant? Enh4 says "if present". Let's skip to avoid duplication since Block 5 covered solution verbal, unless we want another beat.) 
                Enh4: "Understanding (if present... next to Transformation)". 
                Block 5 above uses Understanding component for "Solution Verbal". 
                Let's treat Block 5 as "The Promise" and keep moving.
            */}

            {/* BLOCK 8: HOW IT WORKS (PRODUCT) */}
            <HowItWorksGallery content={content.howItWorks} />

            {/* BLOCK 9: CTA #1 */}
            <VisualCTA content={content.solution.ctaSlot} className="relative z-20 pb-20" />

            {/* BLOCK 10: CORE MECHANIC (INPUT TO ACTION) */}
            <DemoScenarios content={{ ...content.demos, ctaSlot: { disabled: true } }} />

            {/* BLOCK 11: MEMORIES RETURN (REPLACES ACTION GALLERY) */}
            <MemoriesReturning content={content.memories} />

            {/* BLOCK 12: CONNECTIONS (CONSTELLATION) */}
            <Constellation content={content.constellation} />

            {/* BLOCK 13: MEDIA (VIDEO) */}
            <VideoShowcase content={content.video} />

            {/* BLOCK 14: AI PRESENCE */}
            <div className="relative">
                <Presence content={{ h2: content.coach.h2, p1: content.coach.p1 }} />
            </div>

            {/* BLOCK 15: PROOF (METRICS) */}
            <div className="relative z-20">
                <TrustSignals content={content.metrics} />
            </div>

            {/* BLOCK 16: SOCIAL PROOF (VOICES) */}
            <WhisperedVoices content={{ voices: content.testimonials.items }} />

            {/* BLOCK 17: FAQ */}
            <FAQSection content={content.faq} />

            {/* BLOCK 18: RESOLUTION */}
            <Resolution content={content.resolution} />

            {/* BLOCK 19: FINAL CTA */}
            <WhisperedCTA content={content.footer.cta} />

            <Footer />
        </main>
    );
}

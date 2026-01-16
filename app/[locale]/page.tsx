"use client";

import { useTranslations } from 'next-intl';
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

// New Components for Phase 10
import { HowItWorksGallery } from '@/components/story/how-it-works-gallery';
import { ActionGallery } from '@/components/story/action-gallery';
import { VideoShowcase } from '@/components/story/video-showcase';
import { TrustSignals } from '@/components/story/trust-signals';

export default function Home() {
    const t = useTranslations('story');

    // Construct content object from translations
    const content = {
        hero: {
            h1: t('hero.h1'),
            p1: t('hero.p1'),
            ctaSlot: {
                title: t('hero.ctaSlot.title'),
                subtitle: t('hero.ctaSlot.subtitle'),
                micro: t('hero.ctaSlot.micro'),
                appStore: t('hero.ctaSlot.appStore'),
                googlePlay: t('hero.ctaSlot.googlePlay'),
                disabled: true
            }
        },
        problem: {
            h2: t('problem.h2'),
            p1: t('problem.p1'),
            p2: t('problem.p2'),
            fragments: t.raw('problem.fragments') as string[],
            ctaSlot: {
                title: t('problem.ctaSlot.title'),
                subtitle: t('problem.ctaSlot.subtitle'),
                disabled: true
            }
        },
        solution: {
            h2: t('solution.h2'),
            p1: t('solution.p1'),
            ctaSlot: {
                title: t('solution.ctaSlot.title'),
                subtitle: t('solution.ctaSlot.subtitle'),
                disabled: true
            }
        },
        howItWorks: {
            h2: t('howItWorksGallery.h2'),
            steps: t.raw('howItWorksGallery.steps') as any[]
        },
        demos: {
            h2: t('demos.h2'),
            scenarios: t.raw('demos.scenarios') as any[],
            ctaSlot: {
                title: t('demos.ctaSlot.title'),
                subtitle: t('demos.ctaSlot.subtitle'),
                disabled: true
            }
        },
        useCases: { // Now ActionGallery
            h2: t('actionGallery.h2'),
            items: t.raw('actionGallery.items') as any[],
            ctaSlot: {
                title: t('useCases.ctaSlot.title'), // Reusing exiting CTA slot text
                subtitle: t('useCases.ctaSlot.subtitle'),
                disabled: true
            }
        },
        constellation: {
            intro: t('constellation.intro'),
            ideas: t.raw('constellation.ideas') as any[]
        },
        video: {
            h2: t('videoShowcase.h2'),
            videoUrl: t('videoShowcase.videoUrl'),
            ctaSlot: { // Video specific CTA, re-using a generic one or defining new? Let's reuse 'solution' style or generic.
                title: t('solution.ctaSlot.title'), // "Start capturing"
                subtitle: "See it for yourself",
                disabled: true
            }
        },
        coach: {
            h2: t('coach.h2'),
            p1: t('coach.p1'),
            ctaSlot: {
                title: t('coach.ctaSlot.title'),
                subtitle: t('coach.ctaSlot.subtitle'),
                disabled: true
            }
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
            ctaSlot: {
                title: t('footer.ctaSlot.title'),
                subtitle: t('footer.ctaSlot.subtitle'),
                disabled: true
            },
            copyright: t('footer.copyright')
        }
    };

    return (
        <main className="relative min-h-screen bg-spark-black selection:bg-spark-orange/30 overflow-x-hidden">

            {/* BLOCK 1: Hero / Entry */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center">
                <EntryMoment content={{ h1: content.hero.h1 }} />
                <VisualCTA content={content.hero.ctaSlot} delay={2.5} />
            </section>

            {/* BLOCK 2: Problem (Fragments) */}
            <div className="relative">
                <FragmentedReality content={content.problem} />
                <VisualCTA content={content.problem.ctaSlot} className="relative z-20 -mt-32 pb-32" />
            </div>

            {/* BLOCK 3: Falling Into Place (Transformation + Understanding) */}
            <div className="relative">
                {/* Transformation: from Chaos to Structure */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* Placeholder for visual transformation particles if needed */}
                </div>
                <Understanding content={{ h2: content.solution.h2, p1: content.solution.p1 }} />
            </div>

            {/* BLOCK 4: How It Works (Gallery) - NEW */}
            <HowItWorksGallery content={content.howItWorks} />

            {/* BLOCK 5: Solution CTA */}
            <VisualCTA content={content.solution.ctaSlot} className="relative z-20 pb-20" />

            {/* BLOCK 6: Demos (Interactive) */}
            <DemoScenarios content={content.demos} />

            {/* BLOCK 7: Demos CTA */}
            <VisualCTA content={content.demos.ctaSlot} className="relative z-20 pb-32" />

            {/* BLOCK 8: Use Cases (Action Gallery) - NEW */}
            <ActionGallery content={content.useCases} />

            {/* BLOCK 9: Use Cases CTA */}
            <VisualCTA content={content.useCases.ctaSlot} className="relative z-20 pt-16 pb-32" />

            {/* BLOCK 10: Constellation (Graph) */}
            <Constellation content={content.constellation} />

            {/* BLOCK 11: Video Showcase - NEW */}
            <VideoShowcase content={content.video} />

            {/* BLOCK 12: Video CTA */}
            <VisualCTA content={content.video.ctaSlot} className="relative z-20 -mt-10 pb-32" />

            {/* BLOCK 13: Coach (Presence) */}
            <div className="relative">
                <Presence content={{ h2: content.coach.h2, p1: content.coach.p1 }} />
                <VisualCTA content={content.coach.ctaSlot} className="relative z-20" />
            </div>

            {/* BLOCK 14: Trust Signals (Metrics) - NEW */}
            <div className="relative z-20">
                <TrustSignals content={content.metrics} />
            </div>

            {/* BLOCK 15: Testimonials (Voices) */}
            <WhisperedVoices content={{ voices: content.testimonials.items }} />

            {/* BLOCK 16: Resolution (Block P) */}
            <Resolution content={content.resolution} />

            {/* BLOCK 17: FAQ */}
            <FAQSection content={content.faq} />

            {/* BLOCK 17: Footer / Final CTA */}
            <section className="relative pb-32 pt-20 text-center">
                <h2 className="text-3xl font-light text-white mb-10">{content.footer.h2}</h2>
                <VisualCTA content={content.footer.ctaSlot} />
                <p className="mt-20 text-white/20 text-sm">{content.footer.copyright}</p>
            </section>
        </main>
    );
}

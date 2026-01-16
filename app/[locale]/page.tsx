import { useTranslations } from 'next-intl';
import { FloatingParticles } from '@/components/story/floating-particles';
import { EntryMoment } from '@/components/story/entry-moment';
import { FragmentedReality } from '@/components/story/fragmented-reality';
import { Transformation } from '@/components/story/transformation';
import { Understanding } from '@/components/story/understanding';
import { Constellation } from '@/components/story/constellation';
import { Presence } from '@/components/story/presence';
import { MemoriesReturning } from '@/components/story/memories-returning';
import { WhisperedVoices } from '@/components/story/whispered-voices';
import { Resolution } from '@/components/story/resolution';
import { WhisperedCTA } from '@/components/story/whispered-cta';
import { StoryMediaSection } from '@/components/story/story-media-section';

export default function Home() {
    const t = useTranslations('story');
    const tMedia = useTranslations('media');

    // Construct content objects using t.raw() to get arrays/objects
    const content = {
        entry: {
            whisper: t('entry.whisper'),
            subtitle: t('entry.subtitle'),
        },
        fragmented: {
            fragments: t.raw('fragmented.fragments'),
        },
        transformation: {
            fragments: t.raw('transformation.fragments'),
        },
        understanding: {
            title: t('understanding.title'),
            essence: t('understanding.essence'),
        },
        constellation: {
            ideas: t.raw('constellation.ideas'),
        },
        presence: {
            whisper: t('presence.whisper'),
            qualities: t.raw('presence.qualities'),
        },
        media: {
            title: tMedia('title'),
            subtitle: tMedia('subtitle'),
        },
        memories: {
            memories: t.raw('memories.memories'),
        },
        voices: {
            voices: t.raw('voices.voices'),
        },
        resolution: {
            essence: t('resolution.essence'),
        },
        cta: {
            invitation: t('cta.invitation'),
            comingSoon: t('cta.comingSoon'),
        },
    };

    return (
        <div className="relative min-h-screen bg-[#171727] text-[#E8E8F0] overflow-x-hidden">
            <FloatingParticles />

            <main>
                <EntryMoment content={content.entry} />
                <FragmentedReality content={content.fragmented} />
                <Transformation content={content.transformation} />
                <Understanding content={content.understanding} />
                <Constellation content={content.constellation} />
                <Presence content={content.presence} />
                <StoryMediaSection content={content.media} />
                <MemoriesReturning content={content.memories} />
                <WhisperedVoices content={content.voices} />
                <Resolution content={content.resolution} />
                <WhisperedCTA content={content.cta} />
            </main>

            <footer className="relative py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-xs text-[#9B9BAC]/30 tracking-[0.2em] font-light">
                        SPARK KEEPER — 2026
                    </p>
                </div>
            </footer>
        </div>
    );
}

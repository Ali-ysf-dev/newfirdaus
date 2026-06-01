import { useEffect, useState } from 'react'

import { Header } from '@/features/landing/components/Header'
import { HeroSequence } from '@/features/landing/components/HeroSequence'
import { SectionSeparator } from '@/features/landing/components/SectionSeparator'
import { StoryChapter } from '@/features/landing/components/StoryChapter'
import { Showcase } from '@/features/landing/components/Showcase'
import { CarpetModelViewerSection } from '@/features/landing/components/CarpetModelViewerSection'
import { CtaSection } from '@/features/landing/components/CtaSection'
import { NewsletterSection } from '@/features/landing/components/NewsletterSection'
import { Footer } from '@/features/landing/components/Footer'
import { landingContent } from '@/features/landing/data/landingContent'

function CarpetLandingPage() {
  const [language, setLanguage] = useState('de')
  const content = landingContent[language]

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div id="top" className="dark min-h-screen bg-stone-950 text-stone-100">
      <Header
        content={content.header}
        language={language}
        onLanguageChange={setLanguage}
      />

      <main>
        <HeroSequence content={content.hero} />
        <SectionSeparator
          variant="minimal"
          imageSrc="/بسم_الله_الرحمن_الرحیم-removebg-preview.png"
          imageClassName="object-contain px-3 opacity-95 sm:px-4"
        />

        <StoryChapter
          id={content.story.beginning.id}
          align={content.story.beginning.align}
          eyebrow={content.story.beginning.eyebrow}
          title={content.story.beginning.title}
          body={content.story.beginning.body}
        />
        <SectionSeparator />

        <StoryChapter
          align={content.story.pattern.align}
          eyebrow={content.story.pattern.eyebrow}
          title={content.story.pattern.title}
          body={content.story.pattern.body}
          childrenPosition="left"
        >
          <div className="mt-4 overflow-hidden rounded-[1.75rem] border border-white/10 bg-linear-to-br from-stone-900/80 via-stone-950/70 to-black shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <img
              src="/carpetfoldered.png"
              alt={content.story.pattern.imageAlt}
              className="h-auto w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </StoryChapter>
        <SectionSeparator />

        <Showcase content={content.showcase} />
        <SectionSeparator />

        <StoryChapter
          id={content.story.collection.id}
          align={content.story.collection.align}
          eyebrow={content.story.collection.eyebrow}
          title={content.story.collection.title}
          body={content.story.collection.body}
        />

        <CarpetModelViewerSection content={content.viewer} />
        <SectionSeparator />

        <CtaSection content={content.cta} />
        <NewsletterSection content={content.newsletter} />
      </main>

      <Footer content={content.footer} />
    </div>
  )
}

export { CarpetLandingPage }

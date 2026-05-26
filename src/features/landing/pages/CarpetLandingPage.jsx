import { useEffect, useState } from 'react'

import { Header } from '@/features/landing/components/Header'
import { HeroSequence } from '@/features/landing/components/HeroSequence'
import { StoryChapter } from '@/features/landing/components/StoryChapter'
import { Showcase } from '@/features/landing/components/Showcase'
import { CarpetModelViewerSection } from '@/features/landing/components/CarpetModelViewerSection'
import { CtaSection } from '@/features/landing/components/CtaSection'
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

        <StoryChapter
          id={content.story.beginning.id}
          align={content.story.beginning.align}
          eyebrow={content.story.beginning.eyebrow}
          title={content.story.beginning.title}
          body={content.story.beginning.body}
        />

        <StoryChapter
          align={content.story.pattern.align}
          eyebrow={content.story.pattern.eyebrow}
          title={content.story.pattern.title}
          body={content.story.pattern.body}
        />

        <Showcase content={content.showcase} />

        <StoryChapter
          id={content.story.collection.id}
          align={content.story.collection.align}
          eyebrow={content.story.collection.eyebrow}
          title={content.story.collection.title}
          body={content.story.collection.body}
        />

        <CarpetModelViewerSection content={content.viewer} />

        <CtaSection content={content.cta} />
      </main>

      <Footer content={content.footer} />
    </div>
  )
}

export { CarpetLandingPage }

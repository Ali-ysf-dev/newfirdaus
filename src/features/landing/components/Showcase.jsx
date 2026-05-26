import { ScrollRevealDetailSection } from '@/features/landing/components/ScrollRevealDetailSection'

function Showcase({ content }) {
  return (
    <ScrollRevealDetailSection
      id={content.id}
      ariaLabel={content.ariaLabel}
      eyebrow={content.eyebrow}
      title={content.title}
      intro={content.intro}
      items={content.items}
    />
  )
}

export { Showcase }

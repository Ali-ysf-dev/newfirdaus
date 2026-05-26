import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

import { cn } from '@/lib/utils'

/**
 * Craft details: centered headline + numbered principles. No card chrome —
 * typography only, inherits page background.
 */
function ScrollRevealDetailSection({
  id,
  ariaLabel,
  eyebrow,
  title,
  intro,
  items,
  className,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.35, margin: '-10% 0px -10% 0px' })
  const prefersReduced = useReducedMotion()

  const transition = {
    duration: prefersReduced ? 0 : 0.9,
    ease: [0.22, 1, 0.36, 1],
  }

  const variants = prefersReduced
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0 },
      }

  return (
    <section
      id={id}
      ref={ref}
      aria-label={ariaLabel}
      className={cn('relative px-5 py-20 sm:px-8 sm:py-28 md:py-32', className)}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
        <header className="flex max-w-2xl flex-col items-start gap-4 text-left sm:gap-5 lg:sticky lg:top-24">
          <motion.span
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ ...transition, delay: 0.05 }}
            className="text-[11px] font-medium uppercase tracking-[0.28em] text-amber-200/80 sm:text-xs"
          >
            {eyebrow}
          </motion.span>
          <motion.h2
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ ...transition, delay: 0.15 }}
            className="font-heading text-balance text-3xl font-medium leading-tight text-stone-50 sm:text-4xl md:text-5xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ ...transition, delay: 0.25 }}
            className="max-w-lg text-pretty text-base text-stone-300/90 sm:text-lg"
          >
            {intro}
          </motion.p>
        </header>

        <ul className="flex w-full flex-col pt-2 sm:pt-4">
          {items.map((item, idx) => (
            <motion.li
              key={item.title}
              className={cn(
                'relative flex',
                idx > 0 && '-mt-2 sm:-mt-3 md:-mt-4',
                idx % 2 === 0 ? 'mr-6 sm:mr-12' : 'ml-6 sm:ml-16'
              )}
              style={{ zIndex: idx + 1 }}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ ...transition, delay: 0.35 + idx * 0.1 }}
            >
              <article
                className={cn(
                  'w-full max-w-xl rounded-[1.75rem] border border-white/10 bg-stone-900/85 px-6 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:px-8 sm:py-7',
                  idx % 2 === 0 ? 'text-left' : 'ml-auto text-right'
                )}
              >
                <div
                  className={cn(
                    'mb-4 flex items-center gap-3',
                    idx % 2 === 0 ? 'justify-start' : 'justify-end'
                  )}
                >
                  <span className="text-xs font-medium tabular-nums tracking-[0.32em] text-amber-200/65">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-balance text-xl font-medium leading-snug text-stone-50 sm:text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-pretty text-sm leading-7 text-stone-300/95 sm:text-base">
                  {item.description}
                </p>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { ScrollRevealDetailSection }

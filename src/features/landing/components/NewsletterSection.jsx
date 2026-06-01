import { motion, useReducedMotion } from 'framer-motion'
import { Mail } from 'lucide-react'

import { CleverReachSignupForm } from '@/components/CleverReachSignupForm'

function NewsletterSection({ content }) {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id={content.id}
      aria-label={content.ariaLabel}
      className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20 md:py-24"
    >
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: prefersReduced ? 0 : 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br from-stone-900/80 via-stone-950 to-black shadow-[0_30px_100px_rgba(0,0,0,0.4)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-400/12 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-orange-500/8 blur-3xl"
        />

        <div className="relative grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="flex flex-col justify-center gap-6 border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:py-12">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200/25 bg-amber-100/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-amber-200/90">
              <Mail className="size-3.5" aria-hidden />
              {content.eyebrow}
            </div>

            <div className="space-y-3">
              <h2 className="font-heading text-balance text-3xl font-medium leading-tight text-stone-50 sm:text-4xl">
                {content.title}
              </h2>
              <p className="max-w-md text-pretty text-base leading-relaxed text-stone-300 sm:text-lg">
                {content.description}
              </p>
            </div>

            {content.highlights?.length > 0 && (
              <ul className="space-y-3">
                {content.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-stone-300 sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-300"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col justify-center bg-white/2 p-6 sm:p-8 lg:p-10">
            <CleverReachSignupForm
              action={content.form.action}
              content={content.form}
              className="border-0 bg-transparent shadow-none backdrop-blur-none"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export { NewsletterSection }

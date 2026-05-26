import { useEffect, useState } from 'react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function LanguageToggle({
  language,
  onLanguageChange,
  content,
  className,
}) {
  return (
    <div
      role="group"
      aria-label={content.languageToggleLabel}
      className={cn(
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1',
        className
      )}
    >
      {Object.entries(content.languageOptions).map(([code, label]) => (
        <button
          key={code}
          type="button"
          aria-pressed={language === code}
          onClick={() => onLanguageChange(code)}
          className={cn(
            'rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors',
            language === code
              ? 'bg-stone-50 text-stone-950'
              : 'text-stone-200 hover:text-stone-50'
          )}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

function Header({ content, language, onLanguageChange }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'bg-stone-950/80 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-heading text-lg font-medium tracking-tight text-stone-50 sm:text-xl"
        >
          <img
            src="/Firdaus_logo.avif"
            alt="Firdaus"
            className="h-8 w-auto sm:h-9"
            loading="eager"
            decoding="async"
          />
          <span className="sr-only">Firdaus</span>
        </a>

        <nav
          aria-label={content.primaryNavLabel}
          className="hidden items-center gap-8 text-sm text-stone-200/80 md:flex"
        >
          {content.navItems.map((item) => (
            <a
              key={item.href}
              className="transition-colors hover:text-stone-50"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle
            language={language}
            onLanguageChange={onLanguageChange}
            content={content}
          />

          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: 'sm' }),
              'bg-stone-50 text-stone-950 hover:bg-stone-200'
            )}
          >
            {content.ctaLabel}
          </a>

          <button
            type="button"
            aria-label={open ? content.closeMenuLabel : content.openMenuLabel}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-md text-stone-100 transition-colors hover:bg-white/10 md:hidden"
          >
            <span className="sr-only">{content.toggleMenuLabel}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-white/5 transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-64' : 'max-h-0'
        )}
      >
        <nav
          aria-label={content.mobileNavLabel}
          className="flex flex-col gap-1 px-4 pb-4 pt-2 text-base text-stone-100"
        >
          {[...content.navItems, { label: content.contactLabel, href: '#contact' }].map(
            (item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 transition-colors hover:bg-white/5"
            >
              {item.label}
            </a>
            )
          )}
        </nav>
      </div>
    </header>
  )
}

export { Header }

function Footer({ content }) {
  return (
    <footer className="relative mt-4">
      {/* Gradient top separator */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgba(245,185,50,0.35)_30%,rgba(255,255,255,0.15)_50%,rgba(245,185,50,0.35)_70%,transparent)]"
      />
      {/* Frosted glass panel behind footer content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(6,4,2,0.85)_0%,rgba(12,9,6,0.5)_100%)] backdrop-blur-sm"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <img
              src="/Firdaus_logo.avif"
              alt="Firdaus"
              className="h-5 w-auto opacity-90 sm:h-[22px]"
              loading="lazy"
              decoding="async"
            />
            <p className="text-xs text-stone-500">
              © {new Date().getFullYear()} Firdaus. {content.rightsLabel}
            </p>
          </div>

          <nav
            aria-label={content.navLabel}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-center"
          >
            {content.navItems.map((item) => (
              <a
                key={item.href}
                className="nav-link py-0.5 text-sm text-stone-400 transition-colors duration-200 hover:text-stone-100"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-center text-xs text-stone-500 lg:text-right">
            <p>
              {content.designedByLabel}{' '}
              <span className="font-medium tracking-[0.08em] text-stone-200">
                ALI YOUSSEF
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }

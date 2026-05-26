function Footer({ content }) {
  return (
    <footer>
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/Firdaus_logo.avif"
              alt="Firdaus"
              className="h-5 w-auto sm:h-[22px]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <nav
            aria-label={content.navLabel}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center"
          >
            {content.navItems.map((item) => (
              <a
                key={item.href}
                className="text-sm text-stone-300 transition-colors hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="space-y-1 text-center text-xs text-stone-400 lg:text-right">
            <p>
              © {new Date().getFullYear()} Firdaus. {content.rightsLabel}
            </p>
            <p className="text-stone-300/90">
              {content.designedByLabel}{' '}
              <span className="font-medium tracking-[0.08em] text-white">
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

import { cn } from '@/lib/utils'

function SectionSeparator({
  className,
  variant = 'ornamental',
  imageSrc,
  imageClassName,
}) {
  const isMinimal = variant === 'minimal'

  return (
    <div
      aria-hidden="true"
      className={cn('mx-auto w-full max-w-6xl px-5 py-2 sm:px-8', className)}
    >
      <div className="relative flex items-center justify-center">
        {isMinimal ? (
          <div className="relative w-full max-w-88 sm:max-w-120 lg:max-w-152">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt=""
                className={cn(
                  'h-14 w-full object-cover opacity-90 sm:h-16 lg:h-18',
                  imageClassName
                )}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="flex w-full items-center gap-4 sm:gap-6">
                <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-amber-200/25" />
                <div className="relative flex items-center justify-center">
                  <span className="absolute h-8 w-8 rounded-full bg-amber-200/8 blur-xl" />
                  <span className="relative h-2 w-2 rounded-full bg-amber-200/65 shadow-[0_0_14px_rgba(252,211,77,0.35)]" />
                </div>
                <div className="h-px flex-1 bg-linear-to-l from-transparent via-white/10 to-amber-200/25" />
              </div>
            )}
          </div>
        ) : (
          <div className="flex w-full items-center gap-3 sm:gap-5">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-200/55 shadow-[0_0_12px_rgba(252,211,77,0.28)]" />
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-amber-200/30 to-white/6" />
            </div>

            <div className="relative flex items-center gap-2 rounded-full border border-white/8 bg-stone-900/75 px-4 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-sm">
              <span className="h-px w-8 bg-linear-to-r from-transparent to-amber-200/35 sm:w-10" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-200/60 shadow-[0_0_10px_rgba(252,211,77,0.3)]" />
              <span className="h-2 w-2 rounded-full border border-amber-200/50 bg-amber-200/15" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-200/60 shadow-[0_0_10px_rgba(252,211,77,0.3)]" />
              <span className="h-px w-8 bg-linear-to-l from-transparent to-amber-200/35 sm:w-10" />
            </div>

            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="h-px flex-1 bg-linear-to-l from-transparent via-amber-200/30 to-white/6" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-200/55 shadow-[0_0_12px_rgba(252,211,77,0.28)]" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export { SectionSeparator }

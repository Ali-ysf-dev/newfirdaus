import { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react'

import { useInView } from 'framer-motion'
import { useFrame } from '@react-three/fiber'

import { cn } from '@/lib/utils'

const LazyCarpetViewer = lazy(() =>
  import('@/features/landing/components/carpets/CarpetViewer').then(
    (module) => ({ default: module.CarpetViewer })
  )
)

const LazyCarpetModel = lazy(() =>
  import('@/features/landing/components/carpets/CarpetModel').then((module) => ({
    default: module.CarpetModel,
  }))
)

function ViewerState({ label, detail }) {
  return (
    <div className="flex h-[64svh] min-h-[420px] max-h-[760px] flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-white/10 bg-stone-950/70 px-6 text-center">
      <span className="relative flex h-12 w-12 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-amber-200/10" />
        <span className="h-12 w-12 rounded-full border border-white/15 bg-white/5" />
      </span>
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-200/80">
        {label}
      </p>
      <p className="max-w-md text-sm text-stone-400 sm:text-base">{detail}</p>
    </div>
  )
}

function AnimatedCarpetTransition({ transitionKey, children }) {
  const groupRef = useRef(null)
  const progressRef = useRef(0)

  useEffect(() => {
    progressRef.current = 0
  }, [transitionKey])

  useFrame((_, delta) => {
    const group = groupRef.current
    if (!group) return

    progressRef.current = Math.min(1, progressRef.current + delta * 2.2)

    const t = 1 - Math.pow(1 - progressRef.current, 3)
    const scale = 0.9 + t * 0.1

    group.scale.setScalar(scale)
    group.position.y = (1 - t) * -1.2
    group.rotation.y = (1 - t) * 0.24
    group.rotation.x = (1 - t) * -0.08
  })

  return <group ref={groupRef}>{children}</group>
}

function SwatchButton({ option, isActive, onClick }) {
  const [from, to] = option.swatch ?? ['#d6c4a0', '#8a6b3d']

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        'group flex items-center gap-2.5 rounded-full border px-3 py-2 text-sm transition-all duration-300',
        isActive
          ? 'border-amber-200/70 bg-amber-100/10 text-amber-100 shadow-[0_0_0_1px_rgba(251,213,150,0.25)]'
          : 'border-white/12 bg-white/3 text-stone-300 hover:border-white/30 hover:text-stone-100'
      )}
    >
      <span
        className={cn(
          'h-4 w-4 shrink-0 rounded-full ring-1 ring-inset ring-black/30 transition-transform duration-300',
          isActive ? 'scale-110' : 'group-hover:scale-110'
        )}
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      />
      {option.label}
    </button>
  )
}

function CarpetModelViewerSection({ content }) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    amount: 0.15,
    margin: '20% 0px 20% 0px',
  })

  const [hasEnteredView, setHasEnteredView] = useState(false)
  const [activeId, setActiveId] = useState(content.options[0]?.id ?? '')
  const [resetKey, setResetKey] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)

  useEffect(() => {
    if (inView) setHasEnteredView(true)
  }, [inView])

  const activeOption = useMemo(
    () => content.options.find((option) => option.id === activeId) ?? content.options[0],
    [activeId, content.options]
  )

  const shouldRenderViewer = hasEnteredView && inView && activeOption

  return (
    <section
      id={content.id}
      ref={ref}
      aria-label={content.ariaLabel}
      className="mx-auto w-full max-w-6xl px-5 pb-20 pt-2 sm:px-8 sm:pb-24 md:pb-32"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br from-stone-900/90 via-stone-950 to-black shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"
        />

        <div className="relative flex flex-col gap-6 p-5 sm:gap-7 sm:p-8 lg:p-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-amber-200/80 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              {content.eyebrow}
            </span>
            <h3 className="font-heading text-balance text-3xl font-medium leading-tight text-stone-50 sm:text-4xl">
              {content.title}
            </h3>
            <p className="text-pretty text-base text-stone-300 sm:text-lg">
              {content.body}
            </p>
          </div>

          <div className="relative">
            {shouldRenderViewer ? (
              <>
                <Suspense
                  fallback={
                    <ViewerState
                      label={content.loadingLabel}
                      detail={content.loadingBody}
                    />
                  }
                >
                  <LazyCarpetViewer
                    className="h-[64svh] min-h-[420px] max-h-[760px] rounded-[1.75rem] ring-1 ring-white/10"
                    controls
                    intensity={0.85}
                    autoRotate={autoRotate}
                    resetKey={resetKey}
                  >
                    <AnimatedCarpetTransition transitionKey={activeId}>
                      <LazyCarpetModel
                        variant={activeId}
                        scale={1.1}
                        position={[0, -5.4, 0]}
                      />
                    </AnimatedCarpetTransition>
                  </LazyCarpetViewer>
                </Suspense>

                <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-3 sm:inset-x-4 sm:top-4">
                  {content.liveBadge ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-stone-200 backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      {content.liveBadge}
                    </span>
                  ) : (
                    <span />
                  )}

                  <div className="pointer-events-auto flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setAutoRotate((value) => !value)}
                      aria-pressed={autoRotate}
                      title={content.autoRotateLabel ?? 'Auto-rotate'}
                      className={cn(
                        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs backdrop-blur-md transition-all duration-300',
                        autoRotate
                          ? 'border-amber-200/60 bg-amber-100/10 text-amber-100'
                          : 'border-white/15 bg-black/40 text-stone-300 hover:border-white/30 hover:text-stone-100'
                      )}
                    >
                      <span
                        className={cn(
                          'h-2 w-2 rounded-full transition-colors duration-300',
                          autoRotate ? 'bg-amber-300' : 'bg-stone-500'
                        )}
                      />
                      <span className="hidden sm:inline">
                        {content.autoRotateLabel ?? 'Auto-rotate'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setResetKey((value) => value + 1)}
                      title={content.resetLabel}
                      className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-stone-200 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-black/60 hover:text-stone-50"
                    >
                      {content.resetLabel}
                    </button>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-3 bottom-3 flex flex-col items-center gap-2 sm:inset-x-4 sm:bottom-4">
                  <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur-md">
                    {content.options.map((option) => (
                      <SwatchButton
                        key={option.id}
                        option={option}
                        isActive={activeId === option.id}
                        onClick={() => setActiveId(option.id)}
                      />
                    ))}
                  </div>

                  {content.interactionHint && (
                    <span className="hidden text-center text-[11px] text-stone-400 sm:block">
                      {content.interactionHint}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <ViewerState
                label={content.idleLabel}
                detail={content.idleBody}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { CarpetModelViewerSection }

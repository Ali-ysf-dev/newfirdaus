import { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react'

import { useInView } from 'framer-motion'
import { useFrame } from '@react-three/fiber'

import { cn } from '@/lib/utils'

const LazyCarpetViewer = lazy(() =>
  import('@/features/landing/components/carpets/CarpetViewer').then(
    (module) => ({ default: module.CarpetViewer })
  )
)

const carpetModels = {
  sand: lazy(() =>
    import('@/features/landing/components/carpets/Carpet1').then((module) => ({
      default: module.Carpet1,
    }))
  ),
  amber: lazy(() =>
    import('@/features/landing/components/carpets/Carpet2').then((module) => ({
      default: module.Carpet2,
    }))
  ),
  onyx: lazy(() =>
    import('@/features/landing/components/carpets/Carpet3').then((module) => ({
      default: module.Carpet3,
    }))
  ),
}

function ViewerState({ label, detail }) {
  return (
    <div className="flex h-full min-h-[340px] flex-col items-center justify-center gap-3 rounded-[1.75rem] border border-white/10 bg-stone-950/75 px-6 text-center sm:min-h-[420px]">
      <div className="h-12 w-12 rounded-full border border-white/10 bg-white/5" />
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

function CarpetModelViewerSection({ content }) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    amount: 0.15,
    margin: '20% 0px 20% 0px',
  })

  const [hasEnteredView, setHasEnteredView] = useState(false)
  const [activeId, setActiveId] = useState(content.options[0]?.id ?? '')
  const [resetKey, setResetKey] = useState(0)

  useEffect(() => {
    if (inView) setHasEnteredView(true)
  }, [inView])

  const activeOption = useMemo(
    () => content.options.find((option) => option.id === activeId) ?? content.options[0],
    [activeId, content.options]
  )

  const ActiveModel = activeOption ? carpetModels[activeOption.id] : null
  const shouldRenderViewer = hasEnteredView && inView && ActiveModel

  return (
    <section
      id={content.id}
      ref={ref}
      aria-label={content.ariaLabel}
      className="mx-auto w-full max-w-6xl px-5 pb-20 pt-2 sm:px-8 sm:pb-24 md:pb-32"
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-linear-to-br from-stone-900/90 via-stone-950 to-black shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:p-10">
          <div className="flex flex-col justify-between gap-6">
            <div className="space-y-4 text-left">
              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-amber-200/80 sm:text-xs">
                {content.eyebrow}
              </span>
              <h3 className="font-heading text-balance text-3xl font-medium leading-tight text-stone-50 sm:text-4xl">
                {content.title}
              </h3>
              <p className="max-w-lg text-pretty text-base text-stone-300 sm:text-lg">
                {content.body}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {content.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setActiveId(option.id)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm transition-all duration-300',
                    activeId === option.id
                      ? 'border-amber-200/70 bg-amber-100/10 text-amber-100'
                      : 'border-white/15 bg-white/4 text-stone-300 hover:border-white/35 hover:text-stone-100'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setResetKey((value) => value + 1)}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-stone-200 transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-stone-50"
              >
                {content.resetLabel}
              </button>
            </div>
          </div>

          <div className="relative">
            {shouldRenderViewer ? (
              <Suspense
                fallback={
                  <ViewerState
                    label={content.loadingLabel}
                    detail={content.loadingBody}
                  />
                }
              >
                <LazyCarpetViewer
                  className="h-[52svh] min-h-[340px] max-h-[620px] rounded-[1.75rem] sm:min-h-[420px]"
                  controls
                  intensity={0.72}
                  shadows="contact"
                  resetKey={resetKey}
                >
                  <AnimatedCarpetTransition transitionKey={activeId}>
                    <ActiveModel
                      key={activeId}
                      scale={1.1}
                      position={[0, -5.4, 0]}
                    />
                  </AnimatedCarpetTransition>
                </LazyCarpetViewer>
              </Suspense>
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

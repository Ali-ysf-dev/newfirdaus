import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  AdaptiveDpr,
  AdaptiveEvents,
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PerformanceMonitor,
  useProgress,
} from '@react-three/drei'
import * as THREE from 'three'

import { cn } from '@/lib/utils'

const INITIAL_CAMERA = {
  position: [0, 6, 22],
  target: [0, 0.5, 0],
}

function applyInitialCamera(controls) {
  if (!controls) return
  const [px, py, pz] = INITIAL_CAMERA.position
  const [tx, ty, tz] = INITIAL_CAMERA.target
  controls.object.position.set(px, py, pz)
  controls.target.set(tx, ty, tz)
  controls.update()
}

function ViewerCameraControls({ controlsRef, resetKey, autoRotate }) {
  useEffect(() => {
    applyInitialCamera(controlsRef.current)
  }, [controlsRef])

  useEffect(() => {
    if (!resetKey) return
    applyInitialCamera(controlsRef.current)
  }, [controlsRef, resetKey])

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enablePan
      enableDamping
      dampingFactor={0.08}
      autoRotate={autoRotate}
      autoRotateSpeed={0.9}
      minDistance={4.5}
      maxDistance={40}
      minPolarAngle={0}
      maxPolarAngle={Math.PI - 0.08}
      rotateSpeed={0.85}
      zoomSpeed={2.2}
      panSpeed={1.15}
      mouseButtons={{
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: THREE.MOUSE.PAN,
      }}
    />
  )
}

function CanvasLoader() {
  const { progress, active } = useProgress()

  return (
    <Html center>
      <div className="flex select-none flex-col items-center gap-3">
        <span className="relative flex h-10 w-10">
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-white/15 border-t-amber-200" />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-amber-100/80">
          {active ? `${Math.round(progress)}%` : ''}
        </span>
      </div>
    </Html>
  )
}

/**
 * Shared 3D canvas for any of the carpet models. The carpet itself is passed
 * in as `children` so the same lighting/environment setup frames every model
 * identically.
 *
 * Performance: PerformanceMonitor downgrades pixel ratio under load while
 * AdaptiveDpr/AdaptiveEvents lower resolution and throttle raycasting while
 * the user is interacting, keeping the experience smooth on weaker GPUs.
 */
function CarpetViewer({
  children,
  className,
  controls = true,
  intensity = 0.85,
  autoRotate = false,
  resetKey = 0,
  ...canvasProps
}) {
  const controlsRef = useRef(null)
  const [dpr, setDpr] = useState(1.5)

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden rounded-2xl bg-stone-950',
        className
      )}
    >
      <Canvas
        shadows
        dpr={dpr}
        camera={{ position: [0, 6, 22], fov: 35, near: 0.1, far: 200 }}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false,
        }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.05
        }}
        {...canvasProps}
      >
        <color attach="background" args={['#0a0807']} />
        <fog attach="fog" args={['#0a0807', 34, 64]} />

        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        />

        <ambientLight intensity={0.35 * intensity} />
        <directionalLight
          castShadow
          position={[8, 16, 10]}
          intensity={2.2 * intensity}
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0002}
        >
          <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20, 0.1, 60]} />
        </directionalLight>
        <directionalLight position={[-12, 8, -6]} intensity={0.7 * intensity} color="#ffd9a0" />
        <spotLight
          position={[0, 20, 6]}
          angle={0.5}
          penumbra={1}
          intensity={1.1 * intensity}
          color="#fff2dc"
        />

        <Suspense fallback={<CanvasLoader />}>
          <Float
            speed={1.1}
            rotationIntensity={0.18}
            floatIntensity={0.55}
            floatingRange={[-0.25, 0.25]}
          >
            {children}
          </Float>
          <Environment preset="city" environmentIntensity={0.6} />
        </Suspense>

        <ContactShadows
          position={[0, -5.45, 0]}
          opacity={0.6}
          scale={42}
          blur={2.6}
          far={18}
          resolution={512}
          color="#000000"
        />

        {controls && (
          <ViewerCameraControls
            controlsRef={controlsRef}
            resetKey={resetKey}
            autoRotate={autoRotate}
          />
        )}

        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
    </div>
  )
}

export { CarpetViewer }

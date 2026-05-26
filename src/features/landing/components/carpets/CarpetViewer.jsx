import { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls, Stage } from '@react-three/drei'

import { cn } from '@/lib/utils'

const INITIAL_CAMERA = {
  position: [0, 6, 22],
  target: [0, 0.5, 0],
}

function ViewerCameraControls({ controlsRef }) {

  useEffect(() => {
    const controls = controlsRef.current
    if (!controls) return

    const [px, py, pz] = INITIAL_CAMERA.position
    const [tx, ty, tz] = INITIAL_CAMERA.target
    controls.setLookAt(px, py, pz, tx, ty, tz, false)
  }, [controlsRef])

  return (
    <CameraControls
      ref={controlsRef}
      makeDefault
      minDistance={4.5}
      maxDistance={40}
      minPolarAngle={0}
      maxPolarAngle={Math.PI - 0.08}
      dollySpeed={2.4}
      truckSpeed={1.4}
      azimuthRotateSpeed={0.9}
      polarRotateSpeed={0.9}
      smoothTime={0.55}
      draggingSmoothTime={0.12}
      dollyToCursor
    />
  )
}

/**
 * Shared 3D canvas for any of the carpet models. The carpet itself is
 * passed in as `children` so the same lighting/environment setup can
 * frame Carpet1, Carpet2, and Carpet3 identically.
 *
 * - Stage `preset="rembrandt"` provides a soft three-point key/fill/back lighting rig.
 * - Stage `environment="city"` adds an HDRI for realistic reflections and ambient.
 */
function CarpetViewer({
  children,
  className,
  controls = true,
  intensity = 0.6,
  shadows = 'contact',
  ...canvasProps
}) {
  const controlsRef = useRef(null)

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden rounded-2xl bg-stone-950',
        className
      )}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 6, 22], fov: 35, near: 0.1, far: 200 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        {...canvasProps}
      >
        <color attach="background" args={['#0c0a09']} />
        <Suspense fallback={null}>
          <Stage
            preset="rembrandt"
            environment="city"
            intensity={intensity}
            shadows={shadows}
            adjustCamera={false}
          >
            {children}
          </Stage>
        </Suspense>
        {controls && <ViewerCameraControls controlsRef={controlsRef} />}
      </Canvas>
    </div>
  )
}

export { CarpetViewer }

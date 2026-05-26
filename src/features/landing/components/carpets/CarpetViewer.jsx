import { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import * as THREE from 'three'

import { cn } from '@/lib/utils'

const INITIAL_CAMERA = {
  position: [0, 6, 22],
  target: [0, 0.5, 0],
}

function ViewerCameraControls({ controlsRef, resetKey }) {

  useEffect(() => {
    const controls = controlsRef.current
    if (!controls) return

    const [px, py, pz] = INITIAL_CAMERA.position
    const [tx, ty, tz] = INITIAL_CAMERA.target
    controls.object.position.set(px, py, pz)
    controls.target.set(tx, ty, tz)
    controls.update()
  }, [controlsRef])

  useEffect(() => {
    if (!resetKey) return

    const controls = controlsRef.current
    if (!controls) return

    const [px, py, pz] = INITIAL_CAMERA.position
    const [tx, ty, tz] = INITIAL_CAMERA.target
    controls.object.position.set(px, py, pz)
    controls.target.set(tx, ty, tz)
    controls.update()
  }, [controlsRef, resetKey])

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      enablePan
      enableDamping
      dampingFactor={0.08}
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
  resetKey = 0,
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
        shadows={THREE.PCFShadowMap}
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
        {controls && (
          <ViewerCameraControls controlsRef={controlsRef} resetKey={resetKey} />
        )}
      </Canvas>
    </div>
  )
}

export { CarpetViewer }

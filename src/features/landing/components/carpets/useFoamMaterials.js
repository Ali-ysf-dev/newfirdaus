import { useLayoutEffect, useMemo } from 'react'
import * as THREE from 'three'

const FRONT_TEXTURE_MATERIAL = 'front model texture'

function useFoamMaterials(materials, foamTexture) {
  const frontTextureMaterial = useMemo(() => {
    const source = materials[FRONT_TEXTURE_MATERIAL]
    if (!source) return null

    const cloned = source.clone()
    cloned.map = foamTexture.clone()
    cloned.map.rotation = Math.PI
    cloned.map.center.set(0.5, 0.5)
    cloned.map.needsUpdate = true
    cloned.color = new THREE.Color(0xffffff)
    cloned.needsUpdate = true
    return cloned
  }, [materials, foamTexture])

  useLayoutEffect(() => {
    return () => {
      frontTextureMaterial?.dispose()
    }
  }, [frontTextureMaterial])

  return frontTextureMaterial
}

export { useFoamMaterials }

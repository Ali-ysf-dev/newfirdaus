import { useGLTF } from '@react-three/drei'

const MODEL_URL = '/models/model4.glb'
const DRACO_DECODER_PATH = '/draco/'

function Carpet4(props) {
  const { nodes, materials } = useGLTF(MODEL_URL, DRACO_DECODER_PATH)

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.002']}
        position={[3.48, 12.843, 0.02]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[0.007, 0.01, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Material.002']}
        position={[3.48, 12.9, -0.013]}
        rotation={[Math.PI, Math.PI / 2, 0]}
        scale={[0.007, 0.01, 0.002]}
      />
      <group position={[0, 12, 0.04]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
          position={[0.23, -0.17, 0.257]}
          rotation={[0, 0, Math.PI]}
          scale={[0.015, 0.04, 0.015]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[0.04, 12.26, 0.26]}
        scale={[0.018, 0.015, 0.02]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.foam.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front_texture.geometry}
        material={materials['front model texture']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.back_texture.geometry}
        material={materials['Material.004']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.display.geometry}
        material={
          materials['tripo_mat_93f5d5d4-b371-4a7f-9c7e-aabf3af89880.001']
        }
        position={[0, 12, 0.198]}
        rotation={[Math.PI / 2, -1.553, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sensor_icon_transparent.geometry}
        material={materials.sensor_icon_transparent}
        position={[0, 11, 0.18]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.001']}
        position={[2.614, 7.025, 0]}
        scale={[0.867, 6.265, 0.486]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Material.001']}
        position={[-2.626, 7.025, -0.001]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.867, 6.265, 0.486]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass_of_display.geometry}
        material={materials['Material.005']}
        position={[-0.007, 12.005, 0.261]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.39, 1, 0.38]}
      />
      <group
        position={[3.388, 12.887, 0.007]}
        rotation={[-1.569, 1.266, -0.004]}
        scale={[0.112, 0.104, 0.155]}
      >
        <group position={[0.062, 0, 0.433]} rotation={[0, 0.255, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_0.geometry}
            material={materials['Material.002']}
            scale={[1, 0.74, 1]}
          />
        </group>
        <group position={[0.061, 0, 0.429]} rotation={[0, 0.255, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_0.geometry}
            material={materials['zipper path']}
            scale={[0.97, 0.91, 0.9]}
          />
        </group>
        <group
          position={[0.091, 0, 0.804]}
          rotation={[-0.002, 0.259, 0.009]}
          scale={[1, 0.739, 1]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_0.geometry}
            material={materials['zipper path']}
            position={[0.15, 0, 0.01]}
            scale={[0.53, 0.63, 0.26]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_0.geometry}
          material={materials['Material.002']}
          position={[0.126, 0.025, 0.677]}
          rotation={[0, 0.255, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload(MODEL_URL, DRACO_DECODER_PATH)

export { Carpet4 }

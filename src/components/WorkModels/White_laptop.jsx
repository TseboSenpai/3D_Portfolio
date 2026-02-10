import React from 'react'
import { useGLTF } from '@react-three/drei'

export function WhiteLaptop(props) {
  const { nodes, materials } = useGLTF('/models/white_laptop.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.005, 0.044, 0.15]} rotation={[0, 0, -Math.PI]} scale={[0.288, 0.412, 0.295]}>
          <mesh geometry={nodes['Material19-material-material'].geometry} material={materials['Material19-material']} />
          <mesh geometry={nodes['Material20-material-material'].geometry} material={materials['Material20-material']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/white_laptop.glb')

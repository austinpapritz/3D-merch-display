/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --transform
Author: Ar41k (https://sketchfab.com/ar41k)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nike-air-jordan-fd462c530d974f33a523d88a7562f1cf
Title: Nike Air Jordan
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function NikeAirJordan(props) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('/nike_air_jordan/nike-air-jordan-transformed.glb')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(0.01 + Math.cos(t / 20) / 10, Math.sin(t / 4) / 4, 0)
    ref.current.position.y = (1 + Math.sin(t / 10)) / 10
  })
  return (
    <group {...props} dispose={null} ref={ref}>
      <group scale={0.5} position={[0.65, -0.11, 0]} rotation={[-0.05, 2, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Main} position={[0.35, -0.46, 1.02]} rotation={[-Math.PI, 0, -Math.PI]} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Main} position={[0.68, 0.2, 0.98]} rotation={[1.56, 0.07, Math.PI / 2]} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Main} position={[-0.08, 0.53, 1.1]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Main} position={[0.09, 0.86, 1.07]} rotation={[-Math.PI, -0.26, -Math.PI]} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Main} position={[-0.51, -0.23, 1.18]} rotation={[-Math.PI, -0.34, -Math.PI]} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Main} position={[-2.29, -1.26, 0.92]} rotation={[Math.PI / 2, 0, -2.05]} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Main} position={[-1.83, -0.39, 1.3]} rotation={[Math.PI / 2, 0, -Math.PI]} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Main} position={[-2.59, -0.7, 1.2]} rotation={[Math.PI / 2, 0, -Math.PI]} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Main} position={[-2.61, -0.47, 1.21]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Main} position={[-0.36, 0.24, 1.11]} rotation={[-Math.PI, -0.34, -Math.PI]} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Main} position={[-0.65, 1.03, 1.16]} rotation={[Math.PI / 2, -1.02, Math.PI / 2]} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Main} position={[-0.71, 1.26, 1.21]} rotation={[1.6, -0.91, 1.6]} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Main} position={[-0.1, 0.51, 1.74]} rotation={[0.11, 0.21, -0.36]} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.Main} position={[-1.36, -1.23, 1.14]} rotation={[Math.PI / 2, 0, -2.05]} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Main} position={[-0.98, 0.38, 1.19]} rotation={[Math.PI / 2, 0.6, -Math.PI]} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.Main} position={[-0.19, -0.15, 1.08]} rotation={[Math.PI / 2, 0, -Math.PI]} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.Main} position={[-1.13, -1.25, 1.28]} rotation={[Math.PI / 2, 0, -2.05]} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.Main} position={[-1.34, -0.91, 1.16]} rotation={[-1.57, -0.02, -1.57]} scale={0.04} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.Main} position={[-1.37, 0.2, 1.21]} rotation={[-Math.PI, 1.56, -Math.PI]} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.Main} position={[-0.95, 0.44, 1.23]} rotation={[Math.PI / 2, -1.02, Math.PI / 2]} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.Main} position={[-0.03, 1.03, 1.09]} rotation={[-Math.PI, -0.26, -Math.PI]} />
        <mesh geometry={nodes.Object_46.geometry} material={materials.Main} position={[-2.32, -1.23, 1.16]} rotation={[Math.PI / 2, 0, -2.05]} />
        <mesh geometry={nodes.Object_48.geometry} material={materials.Main} position={[-1.2, -0.93, 1.13]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.Main} position={[-1.28, -1.19, 1.18]} rotation={[Math.PI / 2, 0, -2.05]} />
        <mesh geometry={nodes.Object_52.geometry} material={materials.Main} position={[0.38, -0.46, -1.02]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_54.geometry} material={materials.Main} position={[0.71, 0.2, -0.98]} rotation={[1.59, 0.07, Math.PI / 2]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.Main} position={[-0.04, 0.53, -1.1]} rotation={[0, -Math.PI / 2, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_58.geometry} material={materials.Main} position={[0.12, 0.86, -1.07]} rotation={[0, -0.26, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_60.geometry} material={materials.Main} position={[-0.48, -0.23, -1.18]} rotation={[0, -0.34, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_62.geometry} material={materials.Main} position={[-2.26, -1.26, -0.92]} rotation={[Math.PI / 2, 0, -1.09]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_64.geometry} material={materials.Main} position={[-1.8, -0.39, -1.3]} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_66.geometry} material={materials.Main} position={[-2.56, -0.7, -1.2]} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.Main} position={[-2.57, -0.47, -1.21]} rotation={[0, -Math.PI / 2, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_70.geometry} material={materials.Main} position={[-0.33, 0.24, -1.11]} rotation={[0, -0.34, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_72.geometry} material={materials['Material.001']} position={[-0.62, 1.03, -1.16]} rotation={[Math.PI / 2, -1.02, Math.PI / 2]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_74.geometry} material={materials['Material.001']} position={[-0.68, 1.26, -1.21]} rotation={[1.54, -0.91, 1.54]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_76.geometry} material={materials.Main} position={[-0.07, 0.51, -1.74]} rotation={[3.03, 0.21, -2.78]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_78.geometry} material={materials.Main} position={[-1.32, -1.23, -1.14]} rotation={[Math.PI / 2, 0, -1.09]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_80.geometry} material={materials.Main} position={[-0.95, 0.38, -1.19]} rotation={[Math.PI / 2, 0.6, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_82.geometry} material={materials.Main} position={[-0.16, -0.15, -1.08]} rotation={[Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_84.geometry} material={materials.Main} position={[-1.1, -1.25, -1.28]} rotation={[Math.PI / 2, 0, -1.09]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_86.geometry} material={materials.Main} position={[-1.31, -0.91, -1.16]} rotation={[-1.57, -0.02, -1.57]} scale={[-0.04, 0.04, 0.04]} />
        <mesh geometry={nodes.Object_88.geometry} material={materials.Main} position={[-1.34, 0.2, -1.21]} rotation={[0, 1.56, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_90.geometry} material={materials.Main} position={[-0.92, 0.44, -1.23]} rotation={[Math.PI / 2, -1.02, Math.PI / 2]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_92.geometry} material={materials.Main} position={[0.01, 1.03, -1.09]} rotation={[0, -0.26, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_94.geometry} material={materials.Main} position={[-2.29, -1.23, -1.16]} rotation={[Math.PI / 2, 0, -1.09]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_96.geometry} material={materials.Main} position={[-1.17, -0.93, -1.13]} rotation={[0, -Math.PI / 2, 0]} scale={[-1, 1, 1]} />
        <mesh geometry={nodes.Object_98.geometry} material={materials.Main} position={[-1.25, -1.19, -1.18]} rotation={[Math.PI / 2, 0, -1.09]} scale={[-1, 1, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/nike_air_jordan/nike-air-jordan-transformed.glb')

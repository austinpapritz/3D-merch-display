/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [9.4KB] > C:\Users\P4ppy\Coding\r3f-drei-proj\public\fila_sneaker\scene-transformed.glb [1.88MB] (-19901%)
Author: MAMA's Sneaker Stop (https://sketchfab.com/mamasneakers)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fila-sneaker-scan-quarantine-freebie-f9ce175b20754bcd83eec7a21d694867
Title: FILA Sneaker scan quarantine freebie
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function FilaSneaker(props) {
  const { nodes, materials } = useGLTF('/fila_sneaker/scene-transformed.glb')
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(0.01 + Math.cos(t / 20) / 10, Math.sin(t / 4) / 4, 0)
    ref.current.position.y = (1 + Math.sin(t / 10)) / 10
  })
  return (
    <group {...props} dispose={null} ref={ref} scale={1}>
      <mesh 
        geometry={nodes.low_po_Default_0.geometry} 
        material={materials.Default} 
        position={[0, 7.9, 0]} 
        rotation={[-1.82, 0.135, 1.207]} 
        />
    </group>
  )
}

useGLTF.preload('/fila_sneaker/scene-transformed.glb')

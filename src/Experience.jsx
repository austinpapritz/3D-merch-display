import * as THREE from 'three'
import './style.css'
import { Suspense, useRef, useState} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Box, ContactShadows, OrbitControls, OrthographicCamera, PerspectiveCamera, Plane, useTexture } from '@react-three/drei'
import { NikeAirJordan } from '../public/nike_air_jordan/NikeAirJordan.jsx'
import { AirMag } from '../public/nike_air_mag/AirMag.jsx'
import { FilaSneaker } from '../public/fila_sneaker/FilaSneaker.jsx'
import { TextureLoader } from "three/src/loaders/TextureLoader";
export default function Experience()
{
  const ref = useRef()

  const [activeView, setActiveView] = useState(1);

  const handleNextView = () => {
    setActiveView((current) => (current % 4) + 1);
  };

  const handlePreviousView = () => {
    setActiveView((current) => (current === 1 ? 4 : current - 1));
  };
    return (
    <main ref={ref} className="container">
      <nav className='nav'>
        <button className='btn prev' name="arrow-back-outline" onClick={handlePreviousView}>PREV</button>
        <button className='btn next' name="arrow-forward-outline" onClick={handleNextView}>NEXT</button>
      </nav>
      <Canvas eventSource={ref} className="canvas" camera={ {
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ 0, 0, 1.1 ]
      } }>
        <OrbitControls makeDefault target={[ 0, 0, 0 ]}/>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
        <directionalLight position={[ 1, 2, 3 ]} intensity={4.5} />
        <ambientLight intensity={1.5} />
        <Suspense fallback={null}>
          <Floor position={[ 1, -1 , -6]} rotation={[ -5, 0, 0 ]} />
          {activeView === 1 && <NikeAirJordan />}
          {activeView === 2 && <AirMag />}
          {activeView === 3 && <FilaSneaker />}
            <ContactShadows position={[0, -1, 0]} opacity={.5} scale={10} blur={3} far={10} resolution={256} color="#000000" />
        </Suspense>
      </Canvas>
    </main>
    )
}

// Component for the floor
function Floor() {
  const [displacementMap, diffusionMap, roughnessMap] = useLoader(THREE.TextureLoader, [
    '/laminate/laminate_floor_03_disp_4k.png',
    '/laminate/laminate_floor_03_diff_4k.jpg',
    '/laminate/laminate_floor_03_rough_4k.png'
  ]);

  return (
    <mesh>
      <planeGeometry attach="geometry" args={[25, 25]} />
      <meshStandardMaterial 
        map={diffusionMap} 
        displacementMap={displacementMap} 
        roughnessMap={roughnessMap} 
        roughness={1} />
    </mesh>
  );
}
import * as THREE from 'three'
import './style.css'
import { Suspense, useRef, useState} from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { ContactShadows, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { NikeAirJordan } from '../public/nike_air_jordan/NikeAirJordan.jsx'
import { AirMag } from '../public/nike_air_mag/AirMag.jsx'
import { FilaSneaker } from '../public/fila_sneaker/FilaSneaker.jsx'

export default function Experience()
{
  const ref = useRef()

  const [activeView, setActiveView] = useState(1);

  const handleNextView = () => {
    setActiveView((current) => (current % 3) + 1);
  };

  const handlePreviousView = () => {
    setActiveView((current) => (current === 1 ? 3 : current - 1));

  };
    return (
    <main ref={ref} className="container">
      <nav className='nav'>
        <button className='btn prev' name="arrow-back-outline" onClick={handlePreviousView}>PREV</button>
        <button className='btn next' name="arrow-forward-outline" onClick={handleNextView}>NEXT</button>
      </nav>
      <div className="menu-wrapper">
        <button id="backBtn" classNameName="btn" type="submit">BACK</button>
        <div className="menu-content">
          <form className="menu-form">
            <label for="size" className="size-container">Size
              <input className="size-input" name="size" type="number" min="5" max="16"/>
            </label>
            <label for="color" className="color-container">Color
              <div className="color-btn-wrapper">
                <button className="blue-white color-btn"></button>
                <button className="gold-white color-btn"></button>
                <button className="red-white color-btn"></button>
              </div>
            <button type="submit" id="bundleBtn">Bundle to Save</button>
            </label>
          </form>
        </div>
      </div>
      <Canvas eventSource={ref} className="canvas" camera={ {
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ 0, 0, 1.1 ]
      } }>
        <OrbitControls 
          makeDefault target={[ 0, 0, 0 ]}  
          minAzimuthAngle={-Math.PI / 1}
          maxAzimuthAngle={Math.PI / 1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 2}/>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
        <directionalLight position={[ 1, 2, 25 ]} intensity={1} />
        <ambientLight intensity={3} />
        <Suspense fallback={null}>
          <Floor position={[ 1, -1 , -6]} rotation={[ -5, 0, 0 ]} />
          {activeView === 1 && <NikeAirJordan />}
          {activeView === 2 && <AirMag />}
          {activeView === 3 && <FilaSneaker />}
            <ContactShadows position={[0, -1, 0]} opacity={.5} scale={10} blur={3} far={10} resolution={256} color="#000000" />
          <Floor position={[ 1, -1 , -6]} rotation={[ -5, 0, 0 ]} />
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
    <mesh position={[0, -1.2, -1]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry attach="geometry" args={[55, 55]} />
      <meshStandardMaterial 
        map={diffusionMap} 
        displacementMap={displacementMap} 
        roughnessMap={roughnessMap} 
        roughness={0.1} 
        side={THREE.DoubleSide} />
    </mesh>
  );
}
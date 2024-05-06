import './style.css'
import { Suspense, useRef, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei'
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
      <Canvas eventSource={ref} className="canvas" camera={ {
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ 0, 0, 1.1 ]
      } }>
          {activeView === 1 && (
            <>
              <OrbitControls makeDefault target={[0, 0, 0]}/>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
              <directionalLight position={[1, 2, 3]} intensity={4.5} />
              <ambientLight intensity={1.5} />
              <Suspense fallback={null}>
                <NikeAirJordan />
              </Suspense>
            </>
          )}
          {activeView === 2 && (
            <>
              <OrbitControls makeDefault target={[0, 0, 0]}/>
              <OrthographicCamera makeDefault position={[0, 0, -500]} fov={35} />
              <directionalLight position={[1, 2, 3]} intensity={4.5} />
              <ambientLight intensity={1.5} />
              <Suspense fallback={null}>
                <AirMag />
              </Suspense>
            </>
            )}
          {activeView === 3 && (
            <>
              <OrbitControls makeDefault target={[0, 0, 0]}/>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />
              <directionalLight position={[1, 2, 3]} intensity={0.5} />
              <ambientLight intensity={1.5} />
              <Suspense fallback={null}>
                <FilaSneaker />
              </Suspense>
            </>
            )}
          <Html 
            occlude
            geometry={
                <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
            }>
            <nav className='nav'>
              <button className='btn prev' name="arrow-back-outline" onClick={handlePreviousView}>PREV</button>
              <button className='btn next' name="arrow-forward-outline" onClick={handleNextView}>NEXT</button>
            </nav>
          </Html>
      </Canvas>
    </main>
    )
}
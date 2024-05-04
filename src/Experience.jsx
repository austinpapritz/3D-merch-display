import './style.css'
import { useRef, useState} from 'react'
import { Canvas} from '@react-three/fiber'
import { Bounds, Cylinder, OrbitControls, OrthographicCamera, PerspectiveCamera, View } from '@react-three/drei'
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
        {activeView === 1 && (
          <View index={1} className="view1">
            <OrbitControls makeDefault target={[0.35, 0, 0]}/>
            <PerspectiveCamera makeDefault position={[-2.5, 0, 5]} fov={35} />
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <Bounds fit clip observe margin={1.5}>
              <NikeAirJordan />
            </Bounds>
          </View>
        )}
        {activeView === 2 && (
          <View index={2} className="view1">
            <OrbitControls makeDefault target={[0.35, 0, 0]}/>
            <PerspectiveCamera makeDefault position={[-2.5, 0, 5]} fov={35} />
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <Bounds fit clip observe margin={1.5}>
              <AirMag />
            </Bounds>
          </View>
        )}
        {activeView === 3 && (
          <View index={3} className="view1">
            <OrbitControls makeDefault target={[0.35, 0, 0]}/>
            <PerspectiveCamera makeDefault position={[-2.5, 0, 5]} fov={35} />
            <directionalLight position={[1, 2, 3]} intensity={4.5} />
            <ambientLight intensity={1.5} />
            <Bounds fit clip observe margin={1.5}>
              <FilaSneaker />
            </Bounds>
          </View>
        )}
      <View index={4} className="view2">
        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
        <Bounds fit clip observe margin={1.5}>
          <Cylinder scale={3} args={[ 0.01, 1, 1 ]}  position={[ 1, 0, 0 ]} rotation={[ 0, 0, -1.55 ]} material-color="blue" onClick={handlePreviousView}/>
        </Bounds>
      </View>
      <View index={5} className="view3">
        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
        <Bounds fit clip observe margin={1.5}>
          <Cylinder scale={3} args={[ 0.01, 1, 1 ]}  position={[ 1, 0, 0 ]} rotation={[ 0, 0, 1.55 ]} material-color="blue" onClick={handleNextView}/>
        </Bounds>
      </View>
    <Canvas eventSource={ref} className="canvas" 
    camera={ {
      fov: 45,
      near: 0.1,
      far: 200,
      position: [ 0, 0, 1.1 ]
    } }>
      <View.Port />
    </Canvas>
    </main>
    )
}
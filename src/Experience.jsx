import './style.css'
import { useRef, useState} from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
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
      {/* <View index={4} className="view2">
        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
        <Bounds fit clip observe margin={1.5}>
          <Cylinder scale={3} args={[ 0.01, 1, 1 ]}  position={[ 1, 0, 0 ]} rotation={[ 0, 0, -1.55 ]} material-color="blue" onClick={handlePreviousView}/>
        </Bounds>
      </View>
      <View index={5} className="view2">
        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
        <Bounds fit clip observe margin={1.5}>
          <Cylinder scale={3} args={[ 0.01, 1, 1 ]}  position={[ 1, 0, 0 ]} rotation={[ 0, 0, 1.55 ]} material-color="blue" onClick={handleNextView}/>
        </Bounds>
      </View> */}
    <Arrow index={4} classes={"view2"} position={[-2, 0, 0]} rotation={[0, 0, -Math.PI / 2]} onClick={handlePreviousView} />

    <Arrow index={5} classes={"view3"} position={[2, 0, 0]} rotation={[0, 0, Math.PI / 2]} onClick={handleNextView} />

    <Canvas eventSource={ref} className="canvas" camera={ {
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

function Arrow({ index, classes, position, rotation }) 
{
  const [hovered, setHover] = useState(false)
  return (
    <View index={index} className={classes}>
        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
        <Bounds fit clip observe margin={1.5}>
          <Cylinder 
            scale={hovered ? 4 : 3} 
            args={[ 0.01, 1, 1 ]}  
            position={position} 
            rotation={rotation} 
            material-color={hovered ? "white" : "blue"}
            onPointerEnter={() => setHover(true)} 
            onPointerOut={() => setHover(false)}/>
        </Bounds>
      </View>
  )
}
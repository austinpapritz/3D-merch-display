import './style.css'
import { useRef} from 'react'
import { Canvas} from '@react-three/fiber'
import { Bounds, Cylinder, OrbitControls, OrthographicCamera, PerspectiveCamera, View } from '@react-three/drei'
import { NikeAirJordan } from '../public/nike_air_jordan/NikeAirJordan.jsx'
import { AirMag } from '../public/nike_air_mag/AirMag.jsx'
import { FilaSneaker } from '../public/fila_sneaker/FilaSneaker.jsx'

export default function Experience()
{
  const ref = useRef()
    return (
    <main ref={ref} className="container">
      <View index={1} className="view1">
        <OrbitControls makeDefault target={[0.35, 0, 0]}/>
        <PerspectiveCamera makeDefault position={[-2.5, 0, 5]} fov={35} />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />
        <Bounds fit clip observe margin={1.5}>
          <NikeAirJordan />
          <AirMag />
          <FilaSneaker />
        </Bounds>
      </View>
      <View index={2} className="view2">
        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
        <Bounds fit clip observe margin={1.5}>
          <Cylinder scale={3} args={[ 0.01, 1, 1 ]}  position={[ 1, 0, 0 ]} rotation={[ 0, 0, -1.55 ]} material-color="blue" />
        </Bounds>
      </View>
      <View index={3} className="view3">
        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={80} />
        <Bounds fit clip observe margin={1.5}>
          <Cylinder scale={3} args={[ 0.01, 1, 1 ]}  position={[ 1, 0, 0 ]} rotation={[ 0, 0, 1.55 ]} material-color="blue" />
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
import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, useTexture } from '@react-three/drei';
import Lights from '../components/Lights';
import Ground from '../components/Ground';

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Bus = () => {
  const model = useLoader(GLTFLoader, './models/bus.glb')

  return <primitive object={model.scene}/>
}

const TexturedSpheres = () => {
  const map = useTexture("./textures/TCom_Wall_Stone3_2x2_512_albedo.png");
  const normalMap = useTexture("./textures/TCom_Wall_Stone3_2x2_512_normal.png");
  const roughnessMap = useTexture("./textures/TCom_Wall_Stone3_2x2_512_roughness.png");

  return (
    <>
        <mesh scale={[0.5, 0.5, 0.5]} position={[-0, 1, 0]} castShadow>
          <sphereGeometry />
          <meshStandardMaterial map={map} normalMap={normalMap} roughnessMap={roughnessMap} />
        </mesh>
    </>
  );
}

const Home: NextPage = () => {
  const conVisible = true;

  return (
    <div className="container">
      <Canvas shadows>
        {conVisible ? <Stats /> : null}
        {conVisible ? <axesHelper args={[2]} /> : null}
        {conVisible ? <gridHelper args={[10, 10]} /> : null}
        <OrbitControls />
        {/* <TexturedSpheres /> */}
        <Bus />
        <Lights />
        <Ground />
      </Canvas>
    </div>
  );
};

export default Home

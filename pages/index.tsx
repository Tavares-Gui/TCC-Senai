import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, useTexture } from '@react-three/drei';
import Lights from '../components/Lights';
import Ground from '../components/Ground';
import Bus from '../components/Bus';

const Home: NextPage = () => {
  const conVisible = true;

  return (
    <div className="container">
      <Canvas shadows>
        {conVisible ? <Stats /> : null}
        {conVisible ? <axesHelper args={[2]} /> : null}
        {conVisible ? <gridHelper args={[10, 10]} /> : null}
        <OrbitControls />
        <Bus />
        <Lights />
        <Ground />
      </Canvas>
    </div>
  );
};

export default Home

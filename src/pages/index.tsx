import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei';
import Lights from '../components/Lights';
import Ground from '../components/Ground';
import Bus from '../components/Bus';
import Player from '../components/Player';
import Warehouse from '../components/Warehouse';

const Home: NextPage = () => {
  const conVisible = true;

  return (
    <div className="container">
      <Canvas shadows>
        {conVisible ? <Stats /> : null}
        {conVisible ? <axesHelper args={[2]} /> : null}
        {conVisible ? <gridHelper args={[10, 10]} /> : null}
        {/* <OrbitControls /> */}
        <Bus />
        <Warehouse />
        <Lights />
        <Player />
        <Ground />
      </Canvas>
    </div>
  );
};

export default Home

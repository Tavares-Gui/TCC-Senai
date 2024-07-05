import type { NextPage } from 'next';
import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Lights from '../components/Lights';
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
        <ambientLight intensity={1} />
        <Physics>
          <Warehouse />
          <Bus />
          <Lights x={0} y={10} z={10}/>
          <Lights x={0} y={10} z={-50}/>
          <Player />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Home;
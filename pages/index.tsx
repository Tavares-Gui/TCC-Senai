import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import AnimatedBox from '../components/AnimatedBox';
import { OrbitControls, Stats } from '@react-three/drei';


const Home: NextPage = () => {
  const conVisible = true;

  return (
    <div className="container">
      <Canvas>
        {conVisible ? <Stats /> : null}
        {conVisible ? <axesHelper args={[2]} /> : null}
        {conVisible ? <gridHelper args={[10,10]}/> : null}
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <AnimatedBox isVisible={conVisible}/>
      </Canvas>
    </div>
  );
};

export default Home

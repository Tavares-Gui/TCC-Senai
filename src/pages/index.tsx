import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats, Sky } from '@react-three/drei'; 
import { Physics, usePlane, Debug } from '@react-three/cannon';
import LightBulb from '../components/LightBulb';
import Bus from '../components/Bus';
import Player from '../components/Player';
import Warehouse from '../components/Warehouse';
import Television from '../components/Television';
import Betinho from '../components/Betinho';

const Plane = () => {
  usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="lightgreen" />
    </mesh>
  );
};

const Home: React.FC = () => {
  const conVisible = false;

  const lightPositions: [number, number, number][] = [
    [15, 5, 14],
    [0, 5, 14],
    [-11, 5, 14],
    [15, 5, 4.5],
    [0, 5, 4.5],
    [-11, 5, 4.5],
    [15, 5, -4.5],
    [-11, 5, -4.5],
    [15, 5, -13.5],
    [0, 5, -13.5],
    [-11, 5, -13.5],
    [15, 5, -23],
    [0, 5, -23],
    [-11, 5, -23],
  ];

  const busPositions: [number, number, number][] = [
    [-5, 0, 14],
    [10, 0, 14],
    [20, 0, 14],
    [30, 0, 14]
  ];

  return (
    <div className="container">
      <Canvas shadows>
        {conVisible && <Stats />}
        {conVisible && <axesHelper args={[2]} />}
        <ambientLight intensity={1} />
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} />
        <Physics>
          {/* <Debug> */}
            <Plane />
            <Warehouse />
            <Television />
            <Betinho />
            {lightPositions.map((position, index) => (
              <LightBulb key={index} position={position} />
            ))}
            {busPositions.map((position, index) => (
              <Bus key={index} position={position} />
            ))}
            <Player />
          {/* </Debug> */}
        </Physics>
      </Canvas>
    </div>
  );
};

export default Home;

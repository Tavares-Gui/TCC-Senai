import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import * as THREE from "three";
import LightBulb from '../components/LightBulb';
import Bus from '../components/Bus';
import Player from '../components/Player';
import Warehouse from '../components/Warehouse';
import Plane from '../components/Plane';

interface BusRef {
  getBoundingBox: () => THREE.Box3;
}

const Home: React.FC = () => {
  const conVisible = true;
  const busRef = useRef<BusRef>(null);
  const [collidableObjects, setCollidableObjects] = useState<THREE.Box3[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (busRef.current) {
        const busBoundingBox = busRef.current.getBoundingBox();
        setCollidableObjects([busBoundingBox]);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const lightPositions: [number, number, number][] = [
    [15, 5, 14],
    [0, 5, 14],
    [-11, 5, 14],
    [15, 5, 4.5],
    [0, 5, 4.5],
    [-11, 5, 4.5],
    [15, 5, -4.5],
    [0, 5, -4.5],
    [-11, 5, -4.5],
    [15, 5, -13.5],
    [0, 5, -13.5],
    [-11, 5, -13.5],
    [15, 5, -23],
    [0, 5, -23],
    [-11, 5, -23],
  ];

  return (
    <div className="container">
      <Canvas shadows>
        {conVisible && <Stats />}
        {conVisible && <axesHelper args={[2]} />}
        <ambientLight intensity={1} />
        <Physics>
          <Plane />
          <Warehouse />
          {lightPositions.map((position, index) => (
            <LightBulb key={index} position={position} />
          ))}
          <Bus ref={busRef} />
          <Player collidableObjects={collidableObjects} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Home;

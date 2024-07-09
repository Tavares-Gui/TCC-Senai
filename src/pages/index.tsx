import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import { Physics, Debug } from '@react-three/cannon';
import Lights from '../components/Lights';
import Bus from '../components/Bus';
import Player from '../components/Player';
import Warehouse from '../components/Warehouse';
import Plane from '../components/Plane';

const Home = () => {
  const conVisible = true;
  const busRef = useRef();
  const [collidableObjects, setCollidableObjects] = useState([]);

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

  return (
    <div className="container">
      <Canvas shadows>
        {conVisible ? <Stats /> : null}
        {conVisible ? <axesHelper args={[2]} /> : null}
        {/* {conVisible ? <gridHelper args={[10, 10]} /> : null} */}
        <ambientLight intensity={1} />
        <Physics>
            <Plane />
            <Warehouse />
            <Bus ref={busRef} />
            <Lights x={0} y={10} z={10} />
            <Player collidableObjects={collidableObjects} />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Home;

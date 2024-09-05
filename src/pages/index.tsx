import { Canvas } from "@react-three/fiber";
import { Stats, Sky } from "@react-three/drei";
import LightBulb from "../components/LightBulb";
import Bus from "../components/Bus";
import Player from "../components/Player";
import Warehouse from "../components/Warehouse";
import Television from "../components/Television";
import Betinho from "../components/Betinho";
import { Physics } from "@react-three/rapier";
import Ground from "../components/Groud";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import Hud from "../components/Hud";

const Home: React.FC = () => {
  const conVisible = false;
  const sceneMeshes = useRef<THREE.Mesh[]>([]);

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
    [5, 0, -14],
    [10, 0, -14],
    [-15, 0, -14],
  ];

  return (
    <div className="container">
      <Canvas shadows>
        {conVisible && <Stats />}
        {conVisible && <axesHelper args={[2]} />}
        <ambientLight intensity={1} />
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} />
        <Suspense>
          <Physics>
            {/* <Ground /> */}
            <Player sceneMeshes={sceneMeshes.current} />
            <Warehouse sceneMeshes={sceneMeshes.current} />
            <Television />
            <Betinho />
            {lightPositions.map((position, index) => (
              <LightBulb key={index} position={position} />
            ))}
            {busPositions.map((position, index) => (
              <Bus
                key={index}
                position={position}
                sceneMeshes={sceneMeshes.current}
              />
            ))}
          </Physics>
        </Suspense>
      </Canvas>
      <Hud />
    </div>
  );
};

export default Home;

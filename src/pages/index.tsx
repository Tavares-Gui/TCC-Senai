import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import LightBulb from "../components/LightBulb";
import Player from "../components/Player";
import Warehouse from "../components/Warehouse";
import Television from "../components/Television";
import Betinho from "../components/Betinho";
import { Physics } from "@react-three/rapier";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import Hud from "../components/Hud";
import Conversation from "../components/Conversation";
import LoadingPage from "../components/Loading";

const Home: React.FC = () => {
  const [isConversationOpen, setIsConversationOpen] = useState(false);
  const sceneMeshes = useRef<THREE.Mesh[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

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

  const handleOpenConversation = () => {
    setIsConversationOpen(true);
  };

  const handleCloseConversation = () => {
    setIsConversationOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 15000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
      <Canvas shadows>
        <ambientLight intensity={1} />
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} />
        <Suspense fallback={null}>
          <Physics>
            <Player sceneMeshes={sceneMeshes.current} />
            <Warehouse sceneMeshes={sceneMeshes.current} />
            <Television />
            <Betinho onClick={handleOpenConversation} />
            {lightPositions.map((position, index) => (
              <LightBulb key={index} position={position} />
            ))}
          </Physics>
        </Suspense>
      </Canvas>
      <Conversation isOpen={isConversationOpen} onClose={handleCloseConversation} />
      <Hud />
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            zIndex: 10,
          }}
        >
          <LoadingPage />
        </div>
      )}
    </div>
  );
};

export default Home;
import React, { useEffect, forwardRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useBox } from '@react-three/cannon';

interface BusProps {
  position: [number, number, number];
}

const Bus: React.FC<BusProps> = ({position}) => {
  const busModel = useLoader(GLTFLoader, "./models/bus.glb");

  busModel.scene.traverse((objeto) => {
    if (objeto instanceof THREE.Mesh) {
      objeto.castShadow = true;
    }
  });

  const [boxRef] = useBox(() => ({
    mass: 0,
    position: [position[0], position[1], position[2]],
    args: [3, 8, 14],
  }));

  const handleClick = () => {
    // alert("Ônibus clicado!");
  };

  return (
      <primitive
        object={busModel.scene}
        onClick={handleClick}
        position={position}
        rotation={[0,Math.PI - 50, 0]}
      />
  );
};

Bus.displayName = "Bus";

export default Bus;

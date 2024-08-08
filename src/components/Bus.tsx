import React, { useEffect, forwardRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useBox } from '@react-three/cannon';

const Bus = forwardRef((props, ref) => {
  const busModel = useLoader(GLTFLoader, "./models/bus.glb");

  busModel.scene.traverse((objeto) => {
    if (objeto instanceof THREE.Mesh) {
      objeto.castShadow = true;
    }
  });

  const [boxRef] = useBox(() => ({
    mass: 0,
    position: [4, 0, 2],
    args: [3, 8, 14],
  }));

  const handleClick = () => {
    // alert("Ônibus clicado!");
  };

  return (
    <group {...props} dispose={null}>
      <primitive
        object={busModel.scene}
        onClick={handleClick}
        position={[-5, 0, 30]}
        rotation={[0,Math.PI - 50, 0]}
      />
    </group>
  );
});

Bus.displayName = "Bus";

export default Bus;

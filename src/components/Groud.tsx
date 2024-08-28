import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Ground: React.FC = () => {
  const ref = useRef<THREE.Mesh>(null);

  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh ref={ref} receiveShadow>
        <boxGeometry args={[100, -1, 100]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </RigidBody>
  );
};

export default Ground;

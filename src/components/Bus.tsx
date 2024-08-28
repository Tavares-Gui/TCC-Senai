import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

interface BusProps {
  position: [number, number, number];
}

const Bus: React.FC<BusProps> = ({ position }) => {
  const busModel = useLoader(GLTFLoader, "./models/bus.glb");

  busModel.scene.traverse((objeto) => {
    if (objeto instanceof THREE.Mesh) {
      objeto.castShadow = true;
    }
  });

  return (
    <RigidBody type="fixed" colliders="cuboid">
      <primitive
        object={busModel.scene}
        position={position}
        rotation={[0, Math.PI - 50, 0]}
      />
    </RigidBody>
  );
};

Bus.displayName = "Bus";

export default Bus;

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
    <RigidBody
      type="fixed"
      colliders='hull'
      position={position}
    >
      <primitive object={busModel.scene} />
    </RigidBody>
  );
};

Bus.displayName = "Bus";

export default Bus;

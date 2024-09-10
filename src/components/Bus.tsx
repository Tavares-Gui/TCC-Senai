import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Bus = ({ position, sceneMeshes }: { position: [number, number, number], sceneMeshes: THREE.Mesh[] }) => {
  const model = useLoader(GLTFLoader, "./models/bus.glb");

  model.scene.traverse((objeto) => {
    if (objeto instanceof THREE.Mesh) {
      objeto.castShadow = true;
      sceneMeshes.push(objeto);
    }
  });

  return (
    <RigidBody colliders="hull" position={position} type="fixed">
      <primitive object={model.scene} />
    </RigidBody>
  );
};

export default Bus;

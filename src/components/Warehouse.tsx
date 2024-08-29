import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Warehouse = () => {
  const model = useLoader(GLTFLoader, "./models/boschAtt.glb");

  model.scene.traverse((objeto) => {
    if (objeto instanceof THREE.Mesh) {
      objeto.castShadow = true;
    }
  });

  return (
    <RigidBody colliders='hull' type='fixed'>
      <primitive
        object={model.scene}
        scale={[1.45, 1.45, 1.45]}
        position={[0, 0, 0]}
      />
    </RigidBody>
  );
};

export default Warehouse;

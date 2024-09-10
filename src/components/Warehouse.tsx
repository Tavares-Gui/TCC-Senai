import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Warehouse = ({ sceneMeshes }: { sceneMeshes: THREE.Mesh[] }) => {
  const model = useLoader(GLTFLoader, "./models/BOSCH.glb");

  model.scene.traverse((objeto) => {
    if (objeto instanceof THREE.Mesh) {
      objeto.castShadow = true;
      sceneMeshes.push(objeto);
    }
  });

  return (
    <RigidBody colliders="hull" type="fixed">
      <primitive
        object={model.scene}
        scale={[1.45, 1.45, 1.45]}
        rotation={[0, Math.PI, 0]}
      />
    </RigidBody>
  );
};

export default Warehouse;

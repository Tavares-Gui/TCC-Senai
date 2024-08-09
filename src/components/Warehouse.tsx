import { useLoader } from "@react-three/fiber";
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
    <primitive
      object={model.scene}
      scale={[1.4, 1.4, 1.4]}
      position={[0, 0, 0]}
    />
  );
};

export default Warehouse;

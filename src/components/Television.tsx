import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Television = () => {
  const model = useLoader(GLTFLoader, "./models/TVBosch.glb");

  model.scene.traverse((objeto) => {
    if (objeto instanceof THREE.Mesh) {
      objeto.castShadow = true;
    }
  });

  return (
    <primitive
      object={model.scene}
      scale={[0.2, 0.2, 0.2]}
      position={[-1, 0, 11]}
      rotation={[0, Math.PI - 25.5 ,0]}
    />
  );
};

export default Television;

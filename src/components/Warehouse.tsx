import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Warehouse = () => {
<<<<<<< HEAD
  const model = useLoader(GLTFLoader, "./models/galpao2.glb");

  model.scene.traverse((objeto) => {
    if (objeto instanceof THREE.Mesh) {
      objeto.castShadow = true;
    }
  });

  return (
    <primitive
      object={model.scene}
      scale={[0.4, 0.4, 0.4]}
      position={[0, 2.32, 0]}
    />
  );
};
=======
    const model = useLoader(GLTFLoader, './models/galpao2.glb');

    model.scene.traverse((objeto) => {
        if (objeto instanceof THREE.Mesh) {
            objeto.castShadow = true;
        }
    });

    return (
        <primitive object={model.scene} scale={[0.4, 0.4, 0.4]} position={[0, 2.32, 0]}/>
    );
}
>>>>>>> df104e70594771a616b47f11b848fc99cdc48cfd

export default Warehouse;

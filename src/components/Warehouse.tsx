import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Warehouse = () => {
    const model = useLoader(GLTFLoader, './models/galpao.glb');

    model.scene.traverse((objeto) => {
        if (objeto.isMesh) {
            objeto.castShadow = true;
        }
    });

    return (
        <primitive object={model.scene} scale={[0.4, 0.4, 0.4]} position={[0, 2.32, 0]}/>
    );
}

export default Warehouse;

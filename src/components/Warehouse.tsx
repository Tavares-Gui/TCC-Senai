import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Warehouse = () => {
    const model = useLoader(GLTFLoader, './models/Warehouse.glb')
    model.scene.traverse((objeto) => {
        if (objeto.isMesh) {
            objeto.castShadow = true;
        }
    })  
    return (
        <object3D>
            <primitive object={model.scene} />
        </object3D>
    );
}

export default Warehouse
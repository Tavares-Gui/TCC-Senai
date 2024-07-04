import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Warehouse = () => {
    const model = useLoader(GLTFLoader, './models/galpao.glb')
    model.scene.traverse((objeto) => {
        if (objeto.isMesh) {
            objeto.castShadow = true;
        }
    })  
    return (
        <object3D>
            <primitive object={model.scene} position={[0, 2.349, 0]} scale={[0.4, 0.4, 0.4]}/>
        </object3D>
    );
}

export default Warehouse
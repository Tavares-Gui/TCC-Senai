import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Bus = () => {
    const model = useLoader(GLTFLoader, './models/bus.glb')
    model.scene.traverse((objeto) => {
        if (objeto.isMesh) {
            objeto.castShadow = true;
        }
    })  
    return (
        <object3D rotation={[0,1.55,0]}>
            <primitive position={[2, 0, 10]} object={model.scene} />
        </object3D>
    );
}

export default Bus
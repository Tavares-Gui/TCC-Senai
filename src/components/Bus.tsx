import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBox } from "@react-three/cannon";
import { Box3, Vector3 } from "three";

const Bus = () => {
    const model = useLoader(GLTFLoader, './models/bus.glb');

    const box = new Box3().setFromObject(model.scene);
    const size = new Vector3();
    box.getSize(size);

    const [ref] = useBox(() => ({
        mass: 1,
        position: [0, 0, 0],
        args: [size.x, size.y, size.z] 
    }));

    model.scene.traverse((objeto) => {
        if (objeto.isMesh) {
            objeto.castShadow = true;
        }
    });

    return (
        <mesh ref={ref}>
            {console.log(ref)}
            <primitive object={model.scene} ref={ref}/>
        </mesh>
    );
}

export default Bus;

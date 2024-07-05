import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box3, Vector3 } from "three";
import { useBox } from "@react-three/cannon";

const Warehouse = () => {
    const model = useLoader(GLTFLoader, './models/galpao.glb');

    const box = new Box3().setFromObject(model.scene);
    const size = new Vector3();
    box.getSize(size);

    const [ref] = useBox(() => ({
        mass: 0,
        position: [0, 2.3, 0],
        args: [size.x * 0.4, size.y * 0.4, size.z * 0.4]
    }));

    model.scene.traverse((objeto) => {
        if (objeto.isMesh) {
            objeto.castShadow = true;
        }
    });

    return (
        <mesh ref={ref}>
            <primitive object={model.scene} scale={[0.4, 0.4, 0.4]} />
        </mesh>
    );
}

export default Warehouse;

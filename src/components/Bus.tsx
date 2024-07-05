import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBox } from "@react-three/cannon";

const Bus: React.FC = () => {
    const model = useLoader(GLTFLoader, './models/bus.glb');
    const [ref] = useBox(() => ({
        mass: 1,
        args: [0, 0, 0],
        position: [2, 0, 4],
        rotation: [0, Math.PI / 2, 0]
    }));

    model.scene.traverse((objeto) => {
        if (objeto.isMesh) {
            objeto.castShadow = true;
        }
    });

    return (
        <group ref={ref}>
            <primitive object={model.scene} />
        </group>
    );
}

export default Bus;

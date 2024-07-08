import React, { useEffect } from 'react';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useBox } from "@react-three/cannon";

const Bus: React.FC = () => {
    const busModel = useLoader(GLTFLoader, './models/bus.glb');

    useEffect(() => {
        if (busModel) {
            busModel.scene.rotation.set(0, Math.PI / 2, 0);
            busModel.scene.position.set(2, 0, 4);
            busModel.scene.traverse((objeto) => {
                if (objeto.isMesh) {
                    objeto.castShadow = true;
                }
            });
        }
    }, [busModel]);

    const [coverRef] = useBox(() => ({
        mass: 0,
        args: [3, 3.85, 13.39],
        position: [0, 2, 4],
        rotation: [0, Math.PI / 2, 0]
    }));

    return (
        <group>
            <primitive object={busModel.scene} />
            <mesh ref={coverRef} receiveShadow />
        </group>
    );
}

export default Bus;

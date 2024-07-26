import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

// const man = () => {
//     const model = useLoader(GLTFLoader, './models/galpao2.glb');
//     const boundingBoxRef = useRef(new THREE.Box3());

//     model.scene.traverse((objeto) => {
//         if (objeto instanceof THREE.Mesh) {
//             objeto.castShadow = true;
//         }

//         boundingBoxRef.current.setFromObject(model.scene);
//     });

//     return (
//         <primitive object={model.scene} scale={[0.4, 0.4, 0.4]} position={[0, 2.32, 0]}/>
//     );
// }

const Warehouse = forwardRef((props, ref) => {
    const model = useLoader(GLTFLoader, './models/galpao2.glb');
    const boundingBoxRef = useRef(new THREE.Box3());

    useEffect(() => {
        if (model) {
            model.scene.traverse((objeto) => {
                if (objeto instanceof THREE.Mesh) {
                    objeto.castShadow = true;
                }
            });

            boundingBoxRef.current.setFromObject(model.scene);
        }
    }, [model]);

    useImperativeHandle(ref, () => ({
        getBoundingBox: () => boundingBoxRef.current
    }));

    return (
        <primitive object={model.scene} scale={[0.4, 0.4, 0.4]} position={[0, 2.32, 0]}/>
    );
});

Warehouse.displayName = "Warehouse";

export default Warehouse;

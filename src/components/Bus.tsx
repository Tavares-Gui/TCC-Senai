import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Bus = forwardRef((props, ref) => {
    const busModel = useLoader(GLTFLoader, './models/bus.glb');
    const busRef = useRef(null);
    const boundingBoxRef = useRef(new THREE.Box3());

    useEffect(() => {
        if (busModel) {
            busModel.scene.rotation.set(0, Math.PI / 2, 0);
            busModel.scene.position.set(2, 0, 4);
            busModel.scene.traverse((objeto) => {
                if (objeto.isMesh) {
                    objeto.castShadow = true;
                }
            });

            boundingBoxRef.current.setFromObject(busModel.scene);
        }
    }, [busModel]);

    useImperativeHandle(ref, () => ({
        getBoundingBox: () => boundingBoxRef.current
    }));

    return (
        <primitive object={busModel.scene} />
    );
});

export default Bus;

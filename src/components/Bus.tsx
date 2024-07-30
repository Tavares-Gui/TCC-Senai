<<<<<<< HEAD
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
=======
import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
>>>>>>> df104e70594771a616b47f11b848fc99cdc48cfd
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Bus = forwardRef((props, ref) => {
<<<<<<< HEAD
  const busModel = useLoader(GLTFLoader, "./models/bus.glb");
  const boundingBoxRef = useRef(new THREE.Box3());

  useEffect(() => {
    if (busModel) {
      busModel.scene.rotation.set(0, Math.PI / 2, 0);
      busModel.scene.position.set(2, 0, 4);
      busModel.scene.traverse((objeto) => {
        if (objeto instanceof THREE.Mesh) {
          objeto.castShadow = true;
        }
      });

      boundingBoxRef.current.setFromObject(busModel.scene);
    }
  }, [busModel]);

  useImperativeHandle(ref, () => ({
    getBoundingBox: () => boundingBoxRef.current,
  }));

  return <primitive object={busModel.scene} />;
=======
    const busModel = useLoader(GLTFLoader, './models/bus.glb');
    const boundingBoxRef = useRef(new THREE.Box3());

    useEffect(() => {
        if (busModel) {
            busModel.scene.rotation.set(0, Math.PI / 2, 0);
            busModel.scene.position.set(2, 0, 4);
            busModel.scene.traverse((objeto) => {
                if (objeto instanceof THREE.Mesh) {
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
>>>>>>> df104e70594771a616b47f11b848fc99cdc48cfd
});

Bus.displayName = "Bus";

<<<<<<< HEAD
export default Bus;
=======
export default Bus;
>>>>>>> df104e70594771a616b47f11b848fc99cdc48cfd

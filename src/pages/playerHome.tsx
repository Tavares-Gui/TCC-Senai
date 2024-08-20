import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";

const Betinho: React.FC = () => {
  const { scene, animations } = useGLTF("./models/ROBERTO.glb");
  const { actions } = useAnimations(animations, scene);

  scene.position.set(0, -5, 0);
  scene.scale.set(4, 4, 4);
  scene.rotation.y = Math.PI;

  useEffect(() => {
    actions["idle"]?.play();
    return () => {
      actions["idle"]?.stop();
    };
  }, [actions["idle"]]);

  return <primitive object={scene} />;
};

const CanvasGroup: React.FC = () => {
  const controlsRef = useRef<any>(null);

  const handleControlsChange = () => {
    if (controlsRef.current) {
      console.log(controlsRef.current);
    }
  };

  return (
    <Canvas style={{ height: "100vh", width: "100vw" }} shadows>
      <ambientLight intensity={1.5} />
      <Betinho />
      <OrbitControls
        target={[-2.162748655129712, 0.823391114585909, -0.14872657945391812]}
        ref={controlsRef}
        onChange={handleControlsChange}
      />
    </Canvas>
  );
};

export default CanvasGroup;

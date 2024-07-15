import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei';

const Betinho: React.FC = () => {
    const { scene, animations } = useGLTF('./models/ROBERTO.glb');
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

const HomePage: React.FC = () => {
    const controlsRef = useRef<any>(null);

    const handleControlsChange = () => {
        if (controlsRef.current) {
            console.log(controlsRef.current)
        }
    };

    return (
        <Canvas
            style={{ height: '100vh', width: '100vw' }}
            shadows
        >
            <ambientLight intensity={1.5} />
            <Betinho />
            <OrbitControls
                target={[-1.1558423577204575, 1.0268284669935128, 0.10170602059426131]}
                ref={controlsRef}
                onChange={handleControlsChange} />

        </Canvas>
    );
};

export default HomePage;

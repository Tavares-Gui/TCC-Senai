import { RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Ground: React.FC = () => {
    const ref = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (ref.current) {
            ref.current.position.y = -0.5;
        }
    });

    return (
        <RigidBody type="fixed" colliders="cuboid">
            <mesh ref={ref} receiveShadow>
                <boxGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color="gray" />
            </mesh>
        </RigidBody>
    );
};

export default Ground;

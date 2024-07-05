import { usePlane } from '@react-three/cannon';
import { useRef } from 'react';
import { MeshStandardMaterial } from 'three';

const Plane: React.FC = () => {
    const [ref] = usePlane(() => ({ mass: 0, rotation: [-Math.PI / 2, 0, 0] }), useRef());


    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[25, 25]} />
            <meshStandardMaterial transparent={true} opacity={0}/>
        </mesh>
    );
}

export default Plane;

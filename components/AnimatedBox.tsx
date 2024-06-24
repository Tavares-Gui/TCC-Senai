import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { BoxHelper } from 'three'

type Props = {
    isVisible: boolean;
}

const AnimatedBox: React.FC<Props> = ({isVisible}) => {
    const meshRef = useRef<THREE.Mesh>(null)
    {
        isVisible ? useHelper(meshRef, BoxHelper, "blue") : null;
    }

    useFrame(() => {
        if (meshRef.current)
            meshRef.current.rotation.x += 0.01;
    })

    return (
        <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>
    );

}

export default AnimatedBox;
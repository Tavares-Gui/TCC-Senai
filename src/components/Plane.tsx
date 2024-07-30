<<<<<<< HEAD
import { usePlane } from "@react-three/cannon";
import { useRef } from "react";
import { Mesh } from "three";

const Plane: React.FC = () => {
  const planeRef = useRef<Mesh>(null!);

  const [ref] = usePlane(
    () => ({ mass: 0, rotation: [-Math.PI / 2, 0, 0] }),
    planeRef
  );

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[25, 25]} />
      <meshStandardMaterial transparent={true} opacity={0} />
    </mesh>
  );
};
=======
import { usePlane } from '@react-three/cannon';
import { useRef } from 'react';
import { Mesh } from 'three';

const Plane: React.FC = () => {
    const planeRef = useRef<Mesh>(null!);

    const [ref] = usePlane(() => ({ mass: 0, rotation: [-Math.PI / 2, 0, 0] }), planeRef);

    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[25, 25]} />
            <meshStandardMaterial transparent={true} opacity={0} />
        </mesh>
    );
}
>>>>>>> df104e70594771a616b47f11b848fc99cdc48cfd

export default Plane;

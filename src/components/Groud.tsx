import { RigidBody } from "@react-three/rapier";

const Ground: React.FC = () => {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh receiveShadow position={[0, -0.4, 0]}>
        <boxGeometry args={[100, 1, 100]} />
        <meshStandardMaterial color="green" transparent={true} opacity={0} />
      </mesh>
    </RigidBody>
  );
};

export default Ground;

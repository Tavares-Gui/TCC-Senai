import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Background: React.FC = () => {
  const texture = useLoader(TextureLoader, '/images/Bosch1.png');

  return (
    <>
      <mesh position={[1, 7, 10]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
}

export default Background;

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PointLight } from "three";

interface LightBulbProps {
  position: [number, number, number];
}

const LightBulb: React.FC<LightBulbProps> = ({ position }) => {
  const light1 = useRef<PointLight>(null);

  useFrame(() => {
    if (light1.current) {
      light1.current.intensity = 50;
      light1.current.position.set(position[0], position[1], position[2]);
    }
  });

  return (
    <>
      <ambientLight intensity={0.01} />
      <pointLight ref={light1} />
    </>
  );
};

export default LightBulb;

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

interface BetinhoProps {
  onClick: () => void;
}

const Betinho: React.FC<BetinhoProps> = ({ onClick }) => {
  const { scene, animations } = useGLTF("./models/BETINHO.glb");
  const { actions } = useAnimations(animations, scene);

  const currentAction = useRef<string>("idle");

  useEffect(() => {
    if (animations.length > 0) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.stop();
        }
      });

      const idleAction = actions["idle"];
      if (idleAction) {
        idleAction.play();
        idleAction.loop = THREE.LoopRepeat;
        currentAction.current = "idle";
      }
    }
  }, [actions, animations]);

  scene.traverse((objeto) => {
    if ((objeto as THREE.Mesh).isMesh) {
      (objeto as THREE.Mesh).castShadow = true;
    }
  });

  return (
    <primitive
      object={scene}
      scale={[1, 1, 1]}
      position={[4, 0.1, -10.5]}
      rotation={[0, Math.PI - 0.7, 0]}
      onClick={onClick}
    />
  );
};

export default Betinho;

import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { RigidBody, RapierRigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { useInput } from "../hooks/useInput";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuaternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

interface DirectionOffsetProps {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
}

const directionOffset = ({
  forward,
  backward,
  left,
  right,
}: DirectionOffsetProps): number => {
  let directionOffset = 0;

  if (forward) {
    if (left) {
      directionOffset = Math.PI / 4;
    } else if (right) {
      directionOffset = -Math.PI / 4;
    } else {
      directionOffset = 0;
    }
  } else if (backward) {
    if (left) {
      directionOffset = (3 * Math.PI) / 4;
    } else if (right) {
      directionOffset = (-3 * Math.PI) / 4;
    } else {
      directionOffset = Math.PI;
    }
  } else if (left) {
    directionOffset = Math.PI / 2;
  } else if (right) {
    directionOffset = -Math.PI / 2;
  }

  return directionOffset;
};

const Player = () => {
  const { forward, backward, left, right, shift } = useInput();
  const { scene, animations } = useGLTF("./models/COLABORADORM.glb");
  const { actions } = useAnimations(animations, scene);
  const rigidBody = useRef<RapierRigidBody>(null);

  scene.traverse((objeto) => {
    if ((objeto as THREE.Mesh).isMesh) {
      (objeto as THREE.Mesh).castShadow = true;
    }
  });

  const currentAction = useRef<string>("idle");
  const controlsRef = useRef<any>(null);
  const camera = useThree((state) => state.camera);

  useEffect(() => {
    let action = "idle";
    if (forward || backward || left || right) {
      action = "walking";
      if (shift) {
        action = "running";
      }
    }

    if (currentAction.current !== action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, shift, actions]);

  const updateCameraTarget = (moveX: number, moveZ: number) => {
    if (rigidBody.current) {
      const position = rigidBody.current.translation();

      camera.position.x += moveX;
      camera.position.z += moveZ;

      cameraTarget.x = position.x;
      cameraTarget.y = position.y + 2;
      cameraTarget.z = position.z;

      if (controlsRef.current) controlsRef.current.target = cameraTarget;

      camera.lookAt(cameraTarget);
    }
  };

  useFrame((state, delta) => {
    if (
      currentAction.current === "running" ||
      currentAction.current === "walking"
    ) {
      if (rigidBody.current) {
        const position = rigidBody.current.translation();

        let angleYCameraDirection = Math.atan2(
          camera.position.x - position.x,
          camera.position.z - position.z
        );

        let newDirectionOffset = directionOffset({
          forward,
          backward,
          left,
          right,
        });

        rotateQuaternion.setFromAxisAngle(
          rotateAngle,
          angleYCameraDirection + newDirectionOffset
        );

        scene.quaternion.rotateTowards(rotateQuaternion, 0.2);

        camera.getWorldDirection(walkDirection);
        walkDirection.y = 0;
        walkDirection.normalize();
        walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

        const velocity = currentAction.current === "running" ? 10 : 5;

        const moveX = walkDirection.x * velocity * delta;
        const moveZ = walkDirection.z * velocity * delta;

        const newPosition = {
          x: position.x + moveX,
          y: position.y,
          z: position.z + moveZ,
        };

        rigidBody.current.setTranslation(newPosition, true);

        updateCameraTarget(moveX, moveZ);
      }
    }
  });

  return (
    <>
      <OrbitControls ref={controlsRef} enableZoom={true} enablePan={true} />
      <RigidBody
        ref={rigidBody}
        colliders={"ball"}
        linearDamping={40}
        lockRotations
      >
        <primitive object={scene} rotation={[0, Math.PI, 0]} />
      </RigidBody>
    </>
  );
};

Player.displayName = "Player";

export default Player;

import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { useInput } from '../hooks/useInput';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from "three"

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0)
let rotateQuarternion = new THREE.Quaternion()
let cameraTarget = new THREE.Vector3()

const directionOffset = ({ forward, backward, left, right }) => {
    var directionOffset = 0;

    if (forward) {
        if (left) {
            directionOffset = Math.PI / 4;
        } else if (right) {
            directionOffset = -Math.PI / 4
        }
    } else if (backward) {
        if (left) {
            directionOffset = Math.PI / 4 + Math.PI / 2;
        } else if (right) {
            directionOffset = -Math.PI / 4 + Math.PI / 2;
        } else {
            directionOffset = Math.PI
        }
    } else if (left) {
        directionOffset = Math.PI / 2;
    } else if (right) {
        directionOffset = -Math.PI / 2;
    }

    return directionOffset;
}


const Player = () => {
    const { forward, backward, left, right, shift } = useInput();
    const { scene, animations } = useGLTF("./models/untitled.glb")
    const { actions } = useAnimations(animations, scene)

    console.log(scene);

    scene.traverse((objeto) => {
        if (objeto.isMesh) {
            objeto.castShadow = true;
        }
    })

    const currentAction = useRef("");
    const controlsRef = useRef<typeof OrbitControls>();
    const camera = useThree((state) => state.camera)

    const updateCameraTarget = (moveX: number, moveZ: number) => {
        camera.position.x += moveX;
        camera.position.z += moveZ;

        cameraTarget.x = scene.position.x;
        cameraTarget.y = scene.position.y + 2;
        cameraTarget.z = scene.position.z;

        if (controlsRef.current) controlsRef.current.target = cameraTarget;

    }

    useEffect(() => {
        let action = "";
        if (forward || backward || left || right) {
            action = "walking"
            if (shift) {
                action = "running"
            }
        } else {
            action = "idle"
        }

        console.log('---')
        console.log(currentAction.current)
        console.log(action)
        console.log('---')

        if (currentAction.current != action) {
            const nextActionToPlay = actions[action];
            const current = actions[currentAction.current];
            current?.fadeOut(0.2);
            nextActionToPlay?.reset().fadeIn(0.2).play();
            currentAction.current = action;
        }

    }, [forward, backward, left, right, shift])

    useFrame((state, delta) => {
        if (currentAction.current == "running" || currentAction.current == "walking") {
            let angleYCameraDirection = Math.atan2(
                camera.position.x - scene.position.x,
                camera.position.z - scene.position.z
            );

            let newDirectionOffset = directionOffset({
                forward,
                backward,
                left,
                right
            });

            rotateQuarternion.setFromAxisAngle(
                rotateAngle,
                angleYCameraDirection + newDirectionOffset
            );
            scene.quaternion.rotateTowards(rotateQuarternion, 0.2);
            
            camera.getWorldDirection(walkDirection);
            walkDirection.y = 0;
            walkDirection.normalize();
            walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

            const velocity = currentAction.current == "running" ? 10 : 5;

            const moveX = walkDirection.x * velocity * delta;
            const moveZ = walkDirection.z * velocity * delta;
            scene.position.x += moveX;
            scene.position.z += moveZ;
            updateCameraTarget(moveX, moveZ);
        }
    })

    return (
        <>
            <OrbitControls ref={controlsRef} />
            <primitive object={scene} scale={[0.5, 0.5, 0.5]} position={[0, 1.2, 0]} />
        </>
    );
}

export default Player;
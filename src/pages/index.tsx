import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats, useAnimations, useGLTF, useTexture } from '@react-three/drei';
import Lights from '../components/Lights';
import Ground from '../components/Ground';
import Bus from '../components/Bus';
import { useEffect, useRef } from 'react';
import { useInput } from '../hooks/useInput';

const MyPlayer = () => {
  const { forward, backward, left, right, shift } = useInput();
  const { scene, animations } = useGLTF("./models/myplayer.glb")
  const { actions } = useAnimations(animations, scene)

  scene.traverse((objeto) => {
    if (objeto.isMesh) {
      objeto.castShadow = true;
    }
  })

  const currentAction = useRef("");

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

  return <primitive object={scene} scale={[0.5, 0.5, 0.5]} position={[0, 1.2, 0]} />;
}

const Home: NextPage = () => {
  const conVisible = true;

  return (
    <div className="container">
      <Canvas shadows>
        {conVisible ? <Stats /> : null}
        {conVisible ? <axesHelper args={[2]} /> : null}
        {conVisible ? <gridHelper args={[10, 10]} /> : null}
        <OrbitControls />
        {/* <Bus /> */}
        <Lights />
        <MyPlayer />
        <Ground />
      </Canvas>
    </div>
  );
};

export default Home

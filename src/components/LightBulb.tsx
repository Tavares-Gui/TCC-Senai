import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const LightBulb = () => {
    const model = useLoader(GLTFLoader, './models/luz.glb');
    const ceilingLampRef = useRef<any>(); 
    const light1 = useRef<any>(); 

    useFrame(() => {
        if(ceilingLampRef.current)
        {
            ceilingLampRef.current.add(light1.current)
            ceilingLampRef.current.add(light1.current.target)
            light1.current.intensity = 30;
            light1.current.angle = 1.55;
            light1.current.penumbra = 0.3;
        }
    })


    return (
        <>
            {console.log(light1.current)}
            <spotLight ref={light1}/>
            <primitive object={model.scene} />
        </>
    );
}

export default LightBulb;

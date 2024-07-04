import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper, HemisphereLight } from "three";

interface LightsProps {
    x: number;
    y: number;
    z: number;
}

const Lights: React.FC<LightsProps> = ({ x, y, z }) => {

    const lightRef = useRef<DirectionalLight>();

    useHelper(lightRef, DirectionalLightHelper, 5, "red");

    return (
        <>
            <directionalLight
                ref={lightRef}
                position={[x, y, z]}
                castShadow
                shadow-mapSize-height={1000}
                shadow-mapSize-width={1000}
                shadow-camera-left={-20}
                shadow-camera-right={20}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
            />
            <hemisphereLight args={["#7cdbe6", "#5e9c49", 0.7]}/>
        </>
    );
}

export default Lights;

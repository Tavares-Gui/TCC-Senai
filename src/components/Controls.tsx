import Image from 'next/image';
import bosch from '../../public/background/bosch.png';
import { FaBus } from "react-icons/fa";
import ControlsInfo from './ControlsInfo';

const Controls = () => {
    return (
        <div className="divControls">
            <ControlsInfo />
            <ControlsInfo />
            <ControlsInfo />
        </div>
    );
}

export default Controls;

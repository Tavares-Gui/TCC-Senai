import Image from 'next/image';
import bosch from '../../public/background/bosch.png';
import keyboard from '../../public/background/keyboardArrow.png';
import shift from '../../public/background/SHIFT.png';
import mouse from '../../public/background/mouse.png';
import ControlsInfo from './ControlsInfo';

const Controls = () => {
    return (
        <div className="divControls">
            <ControlsInfo logoImageSrc={keyboard} titleImageSrc={keyboard} width={90} height={60}/>
            <ControlsInfo logoImageSrc={shift} titleImageSrc={keyboard} width={90} height={60}/>
            <ControlsInfo logoImageSrc={mouse} titleImageSrc={keyboard} width={800} height={90}/>
        </div>
    );
}

export default Controls;

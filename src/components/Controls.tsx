import imageKey from '../../public/images/imageKey.png';
import imageMouse from '../../public/images/imageMouse.png';
import imageShift from '../../public/images/imageShift.png';
import ImageControl1 from '../../public/images/ImageControl1.png';
import ImageControl2 from '../../public/images/ImageControl2.png';
import BoxControls from './BoxControls';

const Controls = () => {
    return (
        <div className="divControls">
            <BoxControls logoImageSrc={imageKey} titleImageSrc={ImageControl1} width={90} height={60}/>
            <BoxControls logoImageSrc={imageShift} titleImageSrc={ImageControl2} width={90} height={60}/>
            <BoxControls logoImageSrc={imageMouse} titleImageSrc={ImageControl1} width={800} height={90}/>
        </div>
    );
}

export default Controls;

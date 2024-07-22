import Image from 'next/image';
import bosch from '../../public/background/bosch.png';
import descubra from '../../public/background/descubra.png';
import desBosTwo from '../../public/background/foikk2.png';
import bus from '../../public/background/bus.png';
import cracha from '../../public/background/cracha.png'
import BoxInfo from './BoxInfo';

const About = () => {
    return (
        <div className='div3d'>
            <div className='watermark'>
                <Image src={bosch} alt="Bosch Logo" width={90} />
            </div>
            <BoxInfo logoImageSrc={bus} titleImageSrc={descubra} flip={false} />
            <BoxInfo logoImageSrc={cracha} titleImageSrc={desBosTwo} flip={true} />
            <BoxInfo logoImageSrc={bus} titleImageSrc={descubra} flip={false} />
        </div>
    );
}

export default About;

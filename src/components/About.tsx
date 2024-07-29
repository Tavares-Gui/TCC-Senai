import Image from 'next/image';
import ImageBosch from '../../public/images/ImageBosch.png';
import ImageBus from '../../public/images/ImageBus.png';
import ImageInfo1 from '../../public/images/ImageInfo1.png';
import ImageBadge from '../../public/images/ImageBadge.png'
import ImageInfo2 from '../../public/images/ImageInfo2.png';
import ImageDoubt from '../../public/images/ImageDoubt.png'
import ImageInfo3 from '../../public/images/ImageInfo3.png'
import BoxInfo from './BoxAbout';
import ButtonStart from './ButtonStart';

const About = () => {
    return (
        <div className='div3d'>
            <div className='watermark'>
                <Image src={ImageBosch} alt="Bosch Logo" width={90} />
            </div>
            <BoxInfo logoImageSrc={ImageBus} titleImageSrc={ImageInfo1} flip={false} />
            <BoxInfo logoImageSrc={ImageBadge} titleImageSrc={ImageInfo2} flip={true} />
            <BoxInfo logoImageSrc={ImageDoubt} titleImageSrc={ImageInfo3} flip={false} />
            <ButtonStart />
        </div>
    );
}

export default About;

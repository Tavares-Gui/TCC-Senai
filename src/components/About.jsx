import Image from 'next/image';
import bosch from '../../public/background/bosch.png';
import bus from '../../public/background/bus.png'
import descubra from '../../public/background/descubra.png'

const About = () => {
    return (
        <div className='div3d'>
            <div className='watermark'>
                <Image src={bosch} alt="Bosch Logo" width={90} />
            </div>
            <div className='vira'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='busForm'>
                        <Image
                            src={bus}
                            style={{ height: '6em', width: '7.5em', position: 'relative', left: '0.2em' }}
                        />
                    </div>
                    <div>
                        <Image src={descubra} width={310} style={{ marginLeft: '2px', marginTop: '15px' }} />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default About;

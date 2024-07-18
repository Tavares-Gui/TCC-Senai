import Image from 'next/image';
import bosch from '../../public/background/bosch.png';
import bus from '../../public/background/bus.png'

const About = () => {
    return (
        <div className='div3d'>
            <div className='watermark'>
                <Image src={bosch} alt="Bosch Logo" width={90} />
            </div>
            <div className='vira'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div className='busForm'>
                        <Image
                            src={bus}
                            style={{ height: '6em', width: '7.5em', position: 'relative', left: '0.2em' }}
                        />
                    </div>
                    <div>
                        <span>EU SOU O MATEUS</span>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default About;

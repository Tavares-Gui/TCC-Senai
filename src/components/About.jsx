import Image from 'next/image';
import bosch from '../../public/background/bosch.png';
import { FaBus } from "react-icons/fa";

const About = () => {
    return (
        <div className="div3d">
            <div className="watermark">
                <Image src={bosch} alt="Bosch Logo" width={90} />
            </div>
            <div className="vira">
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', width: '8em', height: '8em', borderRadius: '100%', boxShadow: 'initial', marginLeft: '20px'}}>
                        <FaBus color='#5f6061' size='4em'/>
                    </div>
                </div>
            </div>
            <div style={{ width: '80%', height: '9em', background: '#5f6061', marginLeft: '4em', display: 'flex', alignItems: 'center', borderRadius: '5px', marginBottom: '20px'}}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', width: '8em', height: '8em', borderRadius: '100%', boxShadow: 'initial', marginLeft: '300px'}}>
                        <FaBus color='#5f6061' size='4em'/>
                    </div>
                </div>
            </div>
            <div style={{ width: '80%', height: '9em', background: '#5f6061', marginLeft: '4em', display: 'flex', alignItems: 'center', borderRadius: '5px', marginBottom: '20px'}}>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white', width: '8em', height: '8em', borderRadius: '100%', boxShadow: 'initial', marginLeft: '20px'}}>
                        <FaBus color='#5f6061' size='4em'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

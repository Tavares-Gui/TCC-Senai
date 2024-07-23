import Image from 'next/image';
import start from '../../public/background/start.png'

const Start = () => {
    return (
        <div className='buttonStart'>
            <Image src={start} alt="Bosch Logo" width={130} />
        </div>
    );
}

export default Start;

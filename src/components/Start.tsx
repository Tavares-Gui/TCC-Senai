import { useState } from 'react';
import Image from 'next/image';
import start from '../../public/background/start.png';

const Start = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className={clicked ? 'buttonStartPress' : 'buttonStart'} onClick={handleClick}>
            <Image src={start} alt="Bosch Logo" width={130} />
        </div>
    );
}

export default Start;

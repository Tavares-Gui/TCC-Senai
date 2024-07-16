import React from 'react';
import Image from 'next/image';
import bosch from '../../public/background/bosch.png';

const Watermark = () => {
    return (
        <div className="watermark">
            <Image src={bosch} alt="Bosch Logo" width={90}  /> 
        </div>
    );
}

export default Watermark;

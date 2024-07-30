<<<<<<< HEAD
import { useState } from "react";
import Image from "next/image";
import start from "../../public/images/buttonStart.png";

const ButtonStart = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={clicked ? "buttonStartPress" : "buttonStart"}
      onClick={handleClick}
    >
      <Image src={start} alt="Bosch Logo" width={130} />
    </div>
  );
};
=======
import { useState } from 'react';
import Image from 'next/image';
import start from '../../public/images/buttonStart.png';

const ButtonStart = () => {
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
>>>>>>> df104e70594771a616b47f11b848fc99cdc48cfd

export default ButtonStart;

import Image from "next/image";
import ImageBosch from "../../public/images/ImageBosch.png";

const InputName = () => {
  return (
    <div className="nameInput">
      <div className="nameInputInside">
        <div className="watermarkName">
          <Image src={ImageBosch} alt="Bosch Logo" width={50} />
        </div>
      </div>
    </div>
  );
};

export default InputName;

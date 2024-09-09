import Image from "next/image";
import { StaticImageData } from "next/image";

interface InfoLiProps {
  infoImage: StaticImageData;
  infoText: string;
}

const InfoLi: React.FC<InfoLiProps> = ({ infoImage, infoText }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
      <Image src={infoImage} alt="Informações Crachá" className="imageInfo" />
      <h1 className="textInfo">{infoText}</h1>
    </div>
  );
};

export default InfoLi;

import Image from "next/image";
import boschImage from "../../public/images/boschImage.jpg";


const CollectionImage = () => {  
    return (
        <div className="collectionImage">
            <div className="formatImage">
                <Image src={boschImage} className="imageBack" alt="Bosch Image"/>
            </div>
        </div>
  );
};

export default CollectionImage;

import CollectionImage from "./CollectionImage";

interface ImageItem {
  src: string;
  alt: string;
  top?: string;
  width: number;
  height: number;
}

const images: ImageItem[] = [
  { src: "/images/Bosch1.png", alt: "Bosch1", top: '0rem', width: 500, height: 300 },
  { src: "/images/Bosch2.png", alt: "Bosch2", top: '9rem', width: 500, height: 300 },
  { src: "/images/Bosch3.png", alt: "Bosch3", top: '18rem', width: 500, height: 300 },
  { src: "/images/Bosch4.png", alt: "Bosch4", top: '27rem', width: 500, height: 300 }
];

const animationDelays = ['-4s', '-8.5s', '-14s', '-1s'];

const CollectionGallery: React.FC = () => {
  return (
    <div className="galleryContainer">
      {images.map((image, index) => (
        <CollectionImage 
          key={index} 
          src={image.src} 
          alt={image.alt} 
          top={image.top} 
          width={image.width} 
          height={image.height}
          animationDelay={animationDelays[index]} 
        />
      ))}
    </div>
  );
};

export default CollectionGallery;

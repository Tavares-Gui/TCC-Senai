import Image from "next/image";

interface CollectionImageProps {
  src: string;
  alt: string;
  top?: string;
  width: number;
  height: number;
  animationDelay?: string;
}

const CollectionImage: React.FC<CollectionImageProps> = ({
  src,
  alt,
  top = "0rem",
  width,
  height,
  animationDelay = "0s",
}) => {
  return (
    <div className="collectionImage">
      <div className="fixedFormat" style={{ top }}>
        <div className="formatImage" style={{ animationDelay }}>
          <Image
            src={src}
            className="imageBack"
            alt={alt}
            width={width}
            height={height}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionImage;

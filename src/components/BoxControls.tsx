import Image, { StaticImageData } from "next/image";

interface ControlsInfo {
  logoImageSrc: StaticImageData;
  titleImageSrc: StaticImageData;
  width: number;
  height: number;
}

const BoxControls: React.FC<ControlsInfo> = ({
  logoImageSrc,
  titleImageSrc,
  width,
<<<<<<< HEAD
  height,
=======
  height
>>>>>>> df104e70594771a616b47f11b848fc99cdc48cfd
}) => {
  return (
    <div className="controlsInfo">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="keyForm">
          <Image
            src={logoImageSrc}
            width={width}
            height={height}
            style={{ position: "relative" }}
            alt={""}
          />
        </div>
        <div>
          <Image
            src={titleImageSrc}
<<<<<<< HEAD
            width={200}
            height={50}
            style={{ marginLeft: "15px", marginTop: "10px" }}
=======
            width={170}
            height={50}
            style={{ marginLeft: "10px", marginTop: "10px" }}
>>>>>>> df104e70594771a616b47f11b848fc99cdc48cfd
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default BoxControls;

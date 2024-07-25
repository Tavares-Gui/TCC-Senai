import Image, { StaticImageData } from "next/image";

interface ControlsInfo {
  logoImageSrc: StaticImageData;
  titleImageSrc: StaticImageData;
  width: number;
  height: number;
}

const ControlsInfo: React.FC<ControlsInfo> = ({
  logoImageSrc,
  titleImageSrc,
  width,
  height
}) => {
  return (
    <div className="controlsInfo">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="keyForm">
          <Image
            src={logoImageSrc}
            width={width}
            height={height}
            style={{ position: "relative"}}
            alt={""}
          />
        </div>
        {/* <div>
              <Image
                src={titleImageSrc}
                width={310}
                height={90}
                style={{ marginLeft: "2px", marginTop: "15px" }}
                alt={""}
              />
            </div> */}
      </div>
    </div>
  );
};

export default ControlsInfo;

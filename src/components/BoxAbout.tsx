<<<<<<< HEAD
import Image, { StaticImageData } from "next/image";

interface BoxInfoProps {
  logoImageSrc: StaticImageData;
  titleImageSrc: StaticImageData;
  flip: boolean;
}

const BoxInfo: React.FC<BoxInfoProps> = ({
  logoImageSrc,
  titleImageSrc,
  flip,
}) => {
  return (
    <div className="vira">
      <div style={{ display: "flex", alignItems: "center" }}>
        {!flip ? (
          <>
            <div className="busForm">
              <Image
                src={logoImageSrc}
                width={120}
                height={90}
                style={{ position: "relative", left: "0.2em" }}
                alt={""}
              />
            </div>
            <div>
              <Image
                src={titleImageSrc}
                width={310}
                height={90}
                style={{ marginLeft: "2px", marginTop: "15px" }}
                alt={""}
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <Image
                src={titleImageSrc}
                width={310}
                height={90}
                style={{ marginLeft: "10px", marginTop: "15px" }}
                alt={""}
              />
            </div>
            <div className="busForm" style={{ marginLeft: "0px" }}>
              <Image
                src={logoImageSrc}
                width={120}
                height={90}
                style={{ position: "relative", left: "0.2em" }}
                alt={""}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
=======
import Image, { StaticImageData } from 'next/image';

interface BoxInfoProps {
    logoImageSrc: StaticImageData;
    titleImageSrc: StaticImageData;
    flip: boolean;
}

const BoxInfo: React.FC<BoxInfoProps> = ({ logoImageSrc, titleImageSrc, flip }) => {
    return (
        <div className='vira'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {!flip ? (
                    <>
                        <div className='busForm'>
                            <Image
                                src={logoImageSrc}
                                width={120}
                                height={90}
                                style={{ position: 'relative', left: '0.2em' }}
                                alt={''} />
                        </div>
                        <div>
                            <Image
                                src={titleImageSrc}
                                width={310}
                                height={90}
                                style={{ marginLeft: '2px', marginTop: '15px' }}
                                alt={''} />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <Image
                                src={titleImageSrc}
                                width={310}
                                height={90}
                                style={{ marginLeft: '10px', marginTop: '15px' }}
                                alt={''} />
                        </div>
                        <div className='busForm' style={{marginLeft: '0px'}}>
                            <Image
                                src={logoImageSrc}
                                width={120}
                                height={90}
                                style={{ position: 'relative', left: '0.2em' }}
                                alt={''} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
>>>>>>> df104e70594771a616b47f11b848fc99cdc48cfd

export default BoxInfo;

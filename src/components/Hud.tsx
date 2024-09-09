import InfoLi from "./InfoLi";
import Image from "next/image";
import cracha from "../../public/images/crachaInfo.png";
import date from "../../public/images/dateInfo.png";
import data from "../../public/images/dataInfo.png";
import duvidas from "../../public/images/duvidasOptions.png";
import engre from "../../public/images/engreOptions.png";
import sair from "../../public/images/sairOptions.png";
import bosch from "../../public/images/bosch.png";
import fcm from "../../public/images/Fcm.png";
import gr from "../../public/images/GR.png";

const Hud = () => {
  return (
    <div>
      <div className="hud">
        <div className="hudNameBack">
          <div className="borderPerfil"></div>
          <div>
            <div className="compoHud">
              <h1 className="nameHud">MATEUS LEITE</h1>
              <div className="juncHud">
                <h1 className="linhaHudNum">FRETADO 06</h1>
                <h1 className="linhaHud">-</h1>
                <h1 className="linhaHud">CAMPO LARGO</h1>
              </div>
              <div className="agregInfo">
                <ul className="ulConfig">
                  <li>
                    <InfoLi infoImage={cracha} infoText="03/20" />
                  </li>
                  <li>
                    <InfoLi infoImage={date} infoText="SETEMBRO" />
                  </li>
                  <li>
                    <InfoLi infoImage={data} infoText="16/20" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hudOptions">
        <div className="hudNameBackOptions">
          <ul className="ulConfigOptions">
            <li>
              <Image
                src={duvidas}
                alt="Dúvidas Metaverso"
                className="imageInfoOptions"
              />
            </li>
            <li>
              <Image
                src={engre}
                alt="Dúvidas Metaverso"
                className="imageInfoOptions"
              />
            </li>
            <li>
              <Image
                src={sair}
                alt="Dúvidas Metaverso"
                className="imageInfoOptions"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="secondFooter">
          <Image src={bosch} alt="Logo Bosch" className="imagensFooter"></Image>
          <div style={{display: 'flex', alignItems: 'center', gap: 6}}>
            <Image src={fcm} alt="Logo Bosch" className="imagensFooter"></Image>
            <h1 className="textFooter">GR/FCM</h1>
            <Image src={gr} alt="Logo Bosch" className="imagensFooter"></Image>
          </div>
        </div>
        <div className="firstFooter"></div>
      </div>
    </div>
  );
};

export default Hud;

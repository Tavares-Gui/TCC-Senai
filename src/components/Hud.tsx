import InfoLi from "./InfoLi";
import cracha from "../../public/images/crachaInfo.png";
import date from "../../public/images/dateInfo.png";
import data from "../../public/images/dataInfo.png";

const Hud = () => {
  return (
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
  );
};

export default Hud;

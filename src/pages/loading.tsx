import React from "react";
import Image from "next/image";
import logoBosch from "../../public/images/logo_bosch.png";
import logoFCM from "../../public/images/FCM.svg";
import logoGR from "../../public/images/GR.svg";
import lamp from "../../public/images/Lamp.png";
import bus from "../../public/images/Bus.png";

const LoadingPage = () => {
  return (
    <div>
      <div className="colorTop"></div>

      <div className="divLoading">
        <div className="divDescLoading">
          <Image src={lamp} alt="Lâmpada de ideia" style={{ width: '3.6rem', height: '4rem' }} />
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '1rem' }}>
            Aqui estará escrito alguma informacao aleatória sobre o nosso sistema
          </h2>
          <hr className="hrLoading" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
          <Image src={logoBosch} alt="Logo Bosch" className="logosLoading" />
          <h1 className="pipeLineLoading" style={{ color: '#007bc0' }}>|</h1>
          <Image src={logoFCM} alt="Logo FCM" className="logosLoading" />
          <h1 className="pipeLineLoading" style={{ color: '#18837e' }}>|</h1>
          <Image src={logoGR} alt="Logo GR" className="logosLoading" />
        </div>

        <div className="loader"></div>

        <div className="busContainer">
          <div className="busAnimation">
            <div className="smokeContainer">
              <div className="smoke"></div>
              <div className="smoke"></div>
              <div className="smoke"></div>
            </div>
            <Image src={bus} alt="Ônibus em movimento" className="busImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

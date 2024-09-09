import React from "react";
import Image from "next/image";
import { div } from "three/examples/jsm/nodes/Nodes";
import logoBosch from "../../public/images/logo_bosch.png";
import logoFCM from "../../public/images/FCM.svg"
import logoGR from "../../public/images/GR.svg";
import lamp from "../../public/images/Lamp.png"

const LoadingPage = () => {
  return (
    <div>
      <div className="colorTop"></div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '30rem'}}>
          <Image src={lamp} alt="Lampada de ideia" className="boschImage" style={{width: '3.6rem', height: '4rem'}}/>
          <h2>Aqui estará escrito alguma informacao aleatória sobre o nosso sistema</h2>
          <hr style={{width: '12em', border: '2px solid #00000'}}></hr>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
        <Image src={logoBosch} alt="Logo Bosch" className="boschImage" />
        <h1 style={{fontSize: '1em', color: '#007bc0', marginLeft: 3, marginRight: 4, marginTop: 5}}>|</h1>
        <Image src={logoFCM} alt="Logo FCM" className="boschImage" />
        <h1 style={{fontSize: '1em', color: '#18837e', marginLeft: 3, marginRight: 4, marginTop: 5}}>|</h1>
        <Image src={logoGR} alt="Logo GR" className="boschImage" />
      </div>
    </div>
  );
};

export default LoadingPage;

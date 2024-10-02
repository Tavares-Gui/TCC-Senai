import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoBosch from "../../public/images/logo_bosch.png";
import logoFCM from "../../public/images/Fcm.png";
import logoGR from "../../public/images/GR.png";
import lamp from "../../public/images/Lamp.png";
import bus from "../../public/images/Bus.png";

const messages = [
    "O sistema utiliza IA para fornecer respostas rápidas sobre horários e rotas do serviço de fretado.",
    "A aplicação está integrada em um ambiente de jogo 3D, proporcionando uma experiência interativa e envolvente.",
    "Usuários podem consultar informações sobre o serviço de fretado diretamente no ambiente virtual.",
    "O sistema permite que os usuários saibam em tempo real os horários atualizados dos ônibus fretados.",
    "É possível acessar a rota completa dos ônibus fretados, otimizando o planejamento dos usuários.",
    "O sistema visa melhorar a comunicação entre a empresa e os usuários por meio de um assistente virtual inteligente.",
    "A IA foi desenvolvida para responder perguntas frequentes e solucionar dúvidas comuns dos usuários do fretado.",
    "O ambiente 3D proporciona uma interface amigável e inovadora, tornando a consulta de informações mais dinâmica.",
    "O sistema melhora a satisfação dos usuários ao agilizar o acesso a dados importantes sobre o serviço de fretado.",
    "Com a utilização de novas tecnologias, o atendimento corporativo para o serviço de fretado se torna mais eficiente e ágil."
];


const LoadingPage = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className="colorTop"></div>

            <div className="divLoading">
                <div className="divDescLoading">
                    <Image src={lamp} alt="Lâmpada de ideia" style={{ width: '3.6rem', height: '4rem' }} />
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '1rem' }}>
                        {messages[currentMessageIndex]}
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
                    <hr className="roadLine" />
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
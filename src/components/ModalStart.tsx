import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import close from "../../public/images/close.png";

interface ModalStartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalStart: React.FC<ModalStartProps> = ({ isOpen, onClose }) => {
  const [nome, setNome] = useState("");
  const [edv, setEdv] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        edv,
      });
      console.log("Deu Boas:", response.data);
      onClose();
    } catch (error) {
      console.error("Deu Ruins:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modalScreen">
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <h1 className="titleModal">PREENCHA COM SUAS INFORMAÇÕES</h1>
          <Image
            src={close}
            alt="Botão Close"
            style={{
              height: "0.45em",
              width: "auto",
              position: "absolute",
              right: "0.5em",
              top: "0.48em",
              cursor: "pointer"
            }}
            onClick={onClose}
          ></Image>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ marginTop: "0.5em" }}
            className="inputBosch"
          />
          <input
            type="text"
            placeholder="EDV"
            value={edv}
            onChange={(e) => setEdv(e.target.value)}
            style={{ marginTop: "1em" }}
            className="inputBosch"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            style={{
              color: "#18837e",
              fontSize: "0.5em",
              marginRight: "0.2em",
            }}
          >
            ESCOLHA SEU
          </h1>
          <h1 style={{ color: "#9e2896", fontSize: "0.5em" }}>PERSONAGEM</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '90%'}}>
            <div className="borderM"></div>
            <div className="borderH"></div>
          </div>
        </div>
        <div className="buttonStart">
          <button onClick={handleSubmit} className="buttonIniciar">INICIAR</button>
        </div>
      </div>
    </div>
  );
};

export default ModalStart;

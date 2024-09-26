import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import close from "../../public/images/close.png";
import selectM from "../../public/images/SelectM.png";
import selectH from "../../public/images/SelectH.png";

interface ModalStartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalStart: React.FC<ModalStartProps> = ({ isOpen, onClose }) => {
  const [nome, setNome] = useState("");
  const [edv, setEdv] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      setErrorMessage(null);
      setSuccessMessage(null);
      const response = await axios.post("http://localhost:3001/users/login", {
        edv,
        username: nome,
      });
      console.log("Login successful:", response.data);
      setSuccessMessage("Login successful");
      onClose();
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Invalid EDV or username");
    }
  };

  const handleCharacterSelect = (character: string) => {
    setSelectedCharacter(character);
  };

  const handleClean = () => {
    onClose();
    setNome("");
    setEdv("");
    setSelectedCharacter(null);
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  return (
    <div className={`modal ${selectedCharacter ? 'has-selected' : ''}`}>
      <div className="modalScreen">
        <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
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
            onClick={handleClean}
          ></Image>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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

        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

        <div style={{ display: "flex", justifyContent: "center", margin: '0.3em 0 0.8em 0' }}>
          <h1 style={{ color: "#18837e", fontSize: "0.5em", marginRight: "0.2em" }}>
            ESCOLHA SEU
          </h1>
          <h1 style={{ color: "#9e2896", fontSize: "0.5em" }}>PERSONAGEM</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.2em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '90%' }}>
            <div
              className={`borderM ${selectedCharacter === 'M' ? 'selected' : ''} ${selectedCharacter === 'H' ? 'blur' : ''}`}
              onClick={() => handleCharacterSelect('M')}
            >
              <Image src={selectH} alt="Personagem Feminino" className="selectCharacter" />
            </div>
            <div
              className={`borderH ${selectedCharacter === 'H' ? 'selected' : ''} ${selectedCharacter === 'M' ? 'blur' : ''}`}
              onClick={() => handleCharacterSelect('H')}
            >
              <Image src={selectM} alt="Personagem Masculino" className="selectCharacter" />
            </div>
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
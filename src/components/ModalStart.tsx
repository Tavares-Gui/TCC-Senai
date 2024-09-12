import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <div>
        <button onClick={onClose}>×</button>
        <div>
          <input
            type="text"
            placeholder="Campo 1"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Campo 2"
            value={edv}
            onChange={(e) => setEdv(e.target.value)}
          />
          <button onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalStart;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image';
import close from "../../public/images/close.png";

interface ConversationProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Message {
    id: number;
    sender: string;
    text: string;
}

const Conversation: React.FC<ConversationProps> = ({ isOpen, onClose }) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        if (isOpen) {
            setMessages([
                {
                    id: 1,
                    sender: "ROBERTINHO",
                    text: "TIRE QUAISQUER DUVIDAS COMIGO SOBRE FRETADO",
                },
            ]);
        }
    }, [isOpen]);

    const handleSendQuestion = async () => {
        if (input.trim() === "") return;

        const newMessageId = messages.length + 1;

        setMessages([
            { id: newMessageId, sender: "MATEUS LEITE", text: input },
        ]);

        try {
            const response = await axios.post("http://127.0.0.1:5000/perguntar", {
                pergunta: input,
            });

            const data = response.data;

            setMessages(prevMessages => [
                ...prevMessages,
                { id: newMessageId + 1, sender: "ROBERTINHO", text: data.resposta }
            ]);
        } catch (error) {
            console.error("Erro ao enviar a pergunta:", error);
            setMessages(prevMessages => [
                ...prevMessages,
                {
                    id: newMessageId + 1,
                    sender: "ROBERTINHO",
                    text: "Desculpe, ocorreu um erro ao buscar a resposta.",
                },
            ]);
        }

        setInput("");
    };

    if (!isOpen) return null;

    return (
        <div className="conversation-modal-small">
            <div className="conversation-modal-header-small">
                <Image
                    src={close}
                    alt="Botão Close"
                    style={{
                        height: "0.6em",
                        width: "auto",
                        position: "absolute",
                        right: "0.5em",
                        top: "0.4em",
                        cursor: "pointer"
                    }}
                    onClick={onClose}
                />
            </div>
            <div className="conversation-modal-body-small">
                {messages.map((message) => (
                    <div key={message.id} className="conversation-modal-message-block">
                        <div className="conversation-modal-message">
                            <strong>{message.sender}:</strong> {message.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="conversation-modal-input-area-small">
                <input
                    type="text"
                    className="conversation-modal-input-small"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua pergunta..."
                />
                <button className="conversation-modal-send-button-small" onClick={handleSendQuestion}>Enviar</button>
            </div>
        </div>
    );
};

export default Conversation;

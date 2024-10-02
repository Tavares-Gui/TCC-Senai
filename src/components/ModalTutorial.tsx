import Image from 'next/image';
import close from "../../public/images/close.png";
import right from "../../public/images/right.png";
import left from "../../public/images/left.png";

interface ModalTutorialProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalTutorial: React.FC<ModalTutorialProps> = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    const handleClean = () => {
        onClose();
    };

    return (
        <div className="modalTuto">
            <div className="modalScreen">
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                    <h1 className="titleModalTuto">TUTORIAL</h1>
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
                    />
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', height: "93%" }}>
                    <div style={{display: "flex", justifyContent: "center", width: "5%"}}>
                        <Image src={left} alt='Left' className='arrows' />
                    </div>
                    <div className="borderTuto">

                    </div>
                    <div style={{display: "flex", justifyContent: "center", width: "5%"}}>
                        <Image src={right} alt='Right' className='arrows' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalTutorial;
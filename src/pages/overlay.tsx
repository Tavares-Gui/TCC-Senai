import { useEffect } from 'react';

const Overlay: React.FC = () => {
  useEffect(() => {
    const rotateRandomly = () => {
      document.querySelectorAll('.fontX').forEach(el => el.classList.remove('rotate'));

      const elements = document.querySelectorAll('.fontX');
      const randomIndex = Math.floor(Math.random() * elements.length);
      const selectedElement = elements[randomIndex];

      selectedElement.classList.add('rotate');

      setTimeout(() => {
        selectedElement.classList.remove('rotate');
      }, 1500);
    };

    const intervalId = setInterval(rotateRandomly, 2500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="colorTop" />
      <div className="corpo">
        <h1 className="bemvindo">BEM-VINDO AO</h1>
        <div className="groupMeta">
          <h1 className="fontX">M</h1>
          <h1 className="fontB">E</h1>
          <h1 className="fontB">T</h1>
          <h1 className="fontB">A</h1>
          <h1 className="fontX">V</h1>
          <h1 className="fontB">E</h1>
          <h1 className="fontB">R</h1>
          <h1 className="fontB">S</h1>
          <h1 className="fontX">O</h1>
        </div>
      </div>
    </>
  );
};

export default Overlay;

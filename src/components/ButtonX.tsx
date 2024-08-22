type ButtonStyle = "buttonVazAzul" | "buttonVazVerde" | "buttonFec";

interface ButtonXProps {
  children: string;
  styleType?: ButtonStyle;
}

const ButtonX: React.FC<ButtonXProps> = ({ children, styleType = "buttonVazAzul" }) => {
  return (
    <div className="buttonConj">
      <button className={styleType}>
        {children}
      </button>
      <div className="buttonFecHover" />
      <div className="buttonFecHover2" />
    </div>
  );
};

export default ButtonX;

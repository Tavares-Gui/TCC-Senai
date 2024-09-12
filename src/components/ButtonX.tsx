type ButtonStyle = "buttonVazAzul" | "buttonVazVerde" | "buttonFec";

interface ButtonXProps {
  children: string;
  styleType?: ButtonStyle;
  onClick: () => void;
}

const ButtonX: React.FC<ButtonXProps> = ({
  children,
  styleType = "buttonVazAzul",
  onClick
}) => {
  return (
    <div className="buttonConj">
      <button className={styleType} onClick={onClick}>{children}</button>
      {styleType === "buttonVazAzul" && (
        <>
          <div className="buttonVazAzulHover" />
          <div className="buttonVazAzulHover2" />
        </>
      )}
      {styleType === "buttonVazVerde" && (
        <>
          <div className="buttonVazVerdeHover" />
          <div className="buttonVazVerdeHover2" />
        </>
      )}
      {styleType === "buttonFec" && (
        <>
          <div className="buttonFecHover" />
          <div className="buttonFecHover2" />
        </>
      )}
    </div>
  );
};

export default ButtonX;

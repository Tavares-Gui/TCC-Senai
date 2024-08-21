type ButtonStyle = "buttonVazAzul" | "buttonVazVerde" | "buttonFec";

interface ButtonXProps {
  children: string;
  styleType?: ButtonStyle;
}

const ButtonX: React.FC<ButtonXProps> = ({ children, styleType = "buttonVazAzul" }) => {
  return (
    <button className={styleType}>
      {children}
    </button>
  );
};

export default ButtonX;

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick} className="btn btn-wide">
        Generate
      </button>
    </div>
  );
};

export default Button;

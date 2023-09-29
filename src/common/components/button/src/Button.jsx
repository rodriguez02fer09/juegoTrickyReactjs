import '../style/desktop.scss'



const Button = ({ label, size, color }) => {
  const buttonClassName = `button ${size ? `button--${size}` : ''} ${color ? `button--${color}` : ''}`;

  return (
    <button className={buttonClassName}>
      {label}
    </button>
  );
};

export default Button;


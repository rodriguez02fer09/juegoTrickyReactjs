import '../style/desktop.scss';

const Button = ({ type, label}) => {
  const buttonClassName = 'button' ;
  return (
    <button className={`${buttonClassName} ${buttonClassName}--${type}`} >
    { label } 
    </button>
  );
};

export default Button;


import "./style.scss";

const Button = ({ variant, name, icon, onClick }) => (
  <button className={`button ${variant}`} onClick={onClick}>
    {icon && <img src={icon} alt="icon" />}
    <label>{name}</label>
  </button>
);

export default Button;

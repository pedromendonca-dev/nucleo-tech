import "./style.scss";

 //duvida aq: "{ variant, name, icon, onClick }" sei q é uma desestruturação e sei como funciona, mas como seria o jeito normal?
const Button = ({ variant, name, icon, onClick }) => (

  //duvida aq: "{`button ${variant}`}" como funciona?
  <button className={`button ${variant}`} onClick={onClick}>
    {icon && <img src={icon} alt="icon" />}
    <label>{name}</label>
  </button>
);

export default Button;

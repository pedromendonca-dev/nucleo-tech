import "./style.scss";

import { useNavigate } from "react-router-dom";

import { HeaderOptions } from "../../constants/header";

import Logo from "../../assets/images/logo.svg";
import Exit from "../../assets/icons/Exit.png";
// import Person from "../../assets/icons/Person.svg";
// import Plus from "../../assets/icons/Plus.svg";

import Button from "../Button";

const Header = () => {
  const navigate = useNavigate();

  // duvida aq: "const location = window?.location?.pathname;" oq é isso?
  const location = window?.location?.pathname;

  return (
    <div className="header">
      <div className="header-title">
        <img src={Logo} alt="Logo" />
        <label>NúcleoTech</label>
      </div>
      <div className="header-options">
        <ul>
          {/* duvida aq: não entendi essa "função"(?) abaixo */}
          {HeaderOptions.map((item) => (
            <li
              className={item.link === location && "underlined"}
              onClick={() => navigate(item.link)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="header-buttons">
          {/* <Button name="Login" icon={Person} onClick={() => navigate('/')} />
          <Button name="Criar conta" icon={Plus} variant="button-border" onClick={() => navigate('/cadastrar')} /> */}
          {/* Adicionar condição de entrada e saida do usuario */}
          <Button name="Sair" icon={Exit} 
          
          onClick={() => {
            navigate('/');
            alert('Logout realizado com sucesso!'); 
            }} />
        </div>
      </div>
    </div>
  );
};

export default Header;

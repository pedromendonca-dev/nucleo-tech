import "./style.scss";

import { useNavigate } from "react-router-dom";

import { HeaderOptions } from "../../constants/header";

import Logo from "../../assets/images/logo.svg";
import Exit from "../../assets/icons/Exit.png";

import Button from "../Button";
import { useUser } from "../../hooks/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useUser();

  const handleLogout = () => {
    logoutUser();
    alert('Logout realizado com sucesso!');
    navigate('/');
  };

  const location = window?.location?.pathname;

  return (
    <div className="header">
      <div className="header-title">
        <img src={Logo} alt="Logo" />
        <label>NúcleoTech</label>
      </div>
      <div className="header-options">
        <ul>
          {}
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
        <ul className="header-options">
            {user && user.userType == 2 && (
            <>
            <li onClick={() => navigate('/meus-cursos')}>
              Meus cursos
            </li>
            <li onClick={() => navigate('/curso-cadastro')}>
            Cadastrar cursos
          </li>
            </>
            )}
            {user && user.userType == 1 && (
              <li onClick={()=> navigate('cursos-inscritos')}>
               Cursos 
              </li>
            )}
        </ul>
       
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
import "./style.scss"

import Eye from "../../assets/icons/Eye.svg";

const Input = ({id, placeholder, type, onChange, value }) => {
  return (
    <div className={type === "password" ? "input-password-container" : ""}>
      <input
        className={`input ${type}`}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />

      {/* duvida aq: como ajeitar bug visual de password? fiz gambiarra */}
      {type === "password" && <img src={Eye} alt="eye" />}
    </div>
  );
};

export default Input;

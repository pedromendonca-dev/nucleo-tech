
import Input from "../Input";
import './style.scss';


const TextField = ({ id, name, type, placeholder, onChange, value }) => {
    return (
        <div className='textfield'>
            <label htmlFor={id}>{name}</label>
            <Input placeholder={placeholder} type={type} id={id} onChange={onChange} value={value}/>
        </div>
    );
};

export default TextField;
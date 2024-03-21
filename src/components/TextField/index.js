
import Input from "../Input";
import './style.scss';


const TextField = ({id, name, type, placeholder}) => {
    return (
        <div className='textfield'>
            <label htmlFor={id}>{name}</label>
            <Input placeholder={placeholder} type={type} id={id}/>
        </div>
    );
};

export default TextField
import React, { useState } from 'react';
import "./style.scss";
import { Button, TextField, Link } from "../../components";
import RegisterIllustration from "../../assets/images/register.svg";
import axios from 'axios'

const Register = () => {
    const [nome, setNome] = useState()
    const [email,setEmail] = useState()
    const [senha,setSenha] = useState()
    const [confirmarSenha, setConfirmarSenha] = useState()
    const [telefone, setTelefone] = useState()
    const [userType, setUserType] = useState()
    
    const [users,setUsers] = useState()



    const handleSubmit = async (e) =>{
        e.preventDefault()

        if(senha!==confirmarSenha){
            alert ("Senhas divergentes")
            return;
        }

        try{
        
            const user = {
                nome,
                email,
                senha,
                telefone,
                userType
            }

            const clearFields =()=>{
                setNome('');
                setEmail('');
                setSenha('');
                setConfirmarSenha('');
                setTelefone('');
                setUserType('');
            }

            const response = await axios.post('http://localhost:3000/usuarios', user)

            
            clearFields();
            
            alert("Cadastro bem sucedido")
       
        }catch(error){

            console.error("Erro no cadastro do usuario", error)

            alert("Houve alguma inconsistencia no sistema, tente novamente mais tarde.")
        }
    };

    return (
        <div className='register-container'>
            <div className='register-card'>
                <form onSubmit={handleSubmit}>
                    <div className="title">
                        <h1>Cadastre-se aqui</h1>
                        <p>Junte-se a nós e comece sua jornada de aprendizado!</p>
                    </div>
                    <TextField
                        id= 'nome'
                        name="Nome"
                        type='text' 
                        placeholder="Insira seu nome"
                        value={nome}
                        onChange={(e)=>setNome(e.target.value)}
                    />
                    <TextField 
                        id='email' 
                        name='E-mail' 
                        type='text' 
                        placeholder='Insira seu e-mail'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <div className="password-container">
                        <TextField 
                            id='senha' 
                            name='Senha' 
                            type='password' 
                            placeholder='********'
                            value={senha}
                            onChange={(e)=>setSenha(e.target.value)}
                        />
                        <TextField 
                            id='confirmar-senha' 
                            name='Confirmar senha' 
                            type='password' 
                            placeholder='********'
                            value={confirmarSenha}
                            onChange={(e)=>setConfirmarSenha(e.target.value)}
                        />
                    </div>
                    <TextField
                        id= 'telefone'
                        name="Telefone"
                        type='text' 
                        placeholder="Insira seu telefone"
                        value={telefone}
                        onChange={(e)=>setTelefone(e.target.value)}
                    />
                    <select className='select' name='select' onChange={(e)=>setUserType(e.target.value)}>Tipo do Usuario
                        <option value='1' selected><strong>Estudante</strong></option>
                        <option value='2'><strong>Professor</strong></option>
                    </select>



                    <Button type="submit" name="Registrar" variant="button-filled" />
                    <div className="register-link-container">
                        Já possui cadastro? <Link children='Faça seu login' href='/login' />
                    </div>
                </form>
            </div>
            <div className='rigth-side'>
                <p>Registre-se <strong>agora</strong> para acesso <strong>ilimitado</strong> aos nossos cursos online</p>
            </div>
            <img src={RegisterIllustration} alt="register-illustration" className="register-illustration" />
        </div>
    )
}



export default Register;
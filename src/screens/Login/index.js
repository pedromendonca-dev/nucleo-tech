import React, { useState } from 'react';
import "./style.scss";
import LoginIllustration from "../../assets/images/login.svg";
import { Button, Link, TextField } from "../../components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:3000/usuarios/login', {
            email,
            senha
          });
      
          if (response.status === 200) {
            alert('Login realizado com sucesso!');
            navigate('/Introdution'); 
          } else {
            alert('Erro ao realizar o login. Verifique suas credenciais.');
          }
        } catch (error) {
          console.error('Erro ao realizar o login:', error);
          alert('Erro ao realizar o login. Verifique sua conexão ou tente novamente mais tarde.');
        }
      }
    return (
        <div className='login-container'>
            <img src={LoginIllustration} alt="login-illustration" className="login-illustration"/>
            <div className='left-side'>
                <p>Acesse sua conta para <strong>desbloquear</strong> todo o <strong>potencial</strong> da nossa plataforma</p>
            </div>
            <div className='login-card'>
                <form onSubmit={handleLogin}>
                    <div className="title">
                        <h1>Login</h1>
                        <p>Já é membro? Faça login para começar.</p>
                    </div>
                    <TextField 
                        id='email' 
                        name='email' 
                        placeholder='Insira seu e-mail'
                        type='text' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField 
                        id='senha' 
                        name='senha' 
                        placeholder='Insira sua senha'
                        type='password' 
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <div className="reset-password">
                        <Link children='Esqueci minha senha' href='#' />
                    </div>
                    <Button type="submit" name="Entrar na plataforma" variant="button-filled" />
                    <div className="login-link-container">
                        Não possui cadastro? <Link children='Registre-se aqui' href='/cadastrar' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;

import React, { useState } from 'react';
import "./style.scss";
import LoginIllustration from "../../assets/images/login.svg";
import { Button, Link, TextField } from "../../components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { loginUser } = useUser();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('http://localhost:3000/usuarios');
            const users = response.data;

            const filteredUsers = users.filter((user) => user.email === form.email && user.senha === form.password);

            if (filteredUsers.length > 0) {
                console.log('Usuário logado');
                const userData = {
                    name: filteredUsers[0].nome,
                    email: form.email,
                    userType: filteredUsers[0].userType
                };
                console.log(userData)
                loginUser(userData);
                navigate('/home');
            } else {
                setError('E-mail ou senha inválidos');
            }
        } catch (error) {
            setError('Problema ao conectar-se ao servidor. Tente novamente mais tarde.');
        }
    };


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
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                    <TextField 
                        id='senha' 
                        name='password' 
                        placeholder='Insira sua senha'
                        type='password' 
                        value={form.password}
                        onChange={e => setForm({ ...form, password: e.target.value })}
                    />
                    <div className="reset-password">
                        <Link children='Esqueci minha senha' href='#' />
                    </div>
                    <Button type="submit" name="Entrar na plataforma" variant="button-filled" />
                    <div className="login-link-container">
                        Não possui cadastro? <Link children='Registre-se aqui' href='/cadastrar' />
                    </div>
                </form>
                {error && <p id='error'className="error-message">{error}</p>}
            </div>
        </div>
    );
}

export default Login;

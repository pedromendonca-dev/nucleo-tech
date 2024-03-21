import React, { useState } from 'react';
import "./style.scss";
import { Button, TextField, Link } from "../../components";
import RegisterIllustration from "../../assets/images/register.svg";
import users from '../../constants/users'; 

const Register = () => {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        telefone: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verifica se as senhas conferem
        if (formData.senha !== formData.confirmarSenha) {
            alert('As senhas não conferem.');
            return;
        }
        // Verifica se o usuário já existe
        const userExists = users.some(user => user.email === formData.email);
        if (userExists) {
            alert('Usuário já cadastrado com este e-mail.');
            return;
        }
        // Aqui você poderia adicionar o novo usuário à lista (isso apenas atualizará a lista durante a sessão atual, pois estamos em um ambiente frontend)
        alert('Cadastro realizado com sucesso!');
        // Redefinir formulário ou redirecionar o usuário
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
                        value={formData.nome}
                        onChange={handleChange}
                    />
                    <TextField 
                        id='email' 
                        name='E-mail' 
                        type='text' 
                        placeholder='Insira seu e-mail'
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <div className="password-container">
                        <TextField 
                            id='senha' 
                            name='Senha' 
                            type='password' 
                            placeholder='********'
                            value={formData.senha}
                            onChange={handleChange}
                        />
                        <TextField 
                            id='confirmar-senha' 
                            name='Confirmar senha' 
                            type='password' 
                            placeholder='********'
                            value={formData.confirmarSenha}
                            onChange={handleChange}
                        />
                    </div>
                    <TextField
                        id= 'telefone'
                        name="Telefone"
                        type='text' 
                        placeholder="Insira seu telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
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
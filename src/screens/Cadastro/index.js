import React, { useState } from 'react';
import Layout from '../../layout';
import { Button, TextField } from '../../components';
import styles from './style.scss';
import axios from 'axios';
import { useUser } from "../../hooks/UserContext";
const Cadastro = () => {
  const [conteudos, setConteudos] = useState([{ titulo: '', videos: [{ titulo: '', url: '', describe: '' }] }]);
  const { user, logoutUser } = useUser();

  

  const handleInputChange = (contentIndex, videoIndex, field, value) => {
    const newConteudos = [...conteudos];
    if (videoIndex === undefined) {
      newConteudos[contentIndex][field] = value;
    } else {
      newConteudos[contentIndex].videos[videoIndex][field] = value;
    }
    setConteudos(newConteudos);
  };

  const addContentSection = () => {
    setConteudos([...conteudos, { titulo: '', videos: [{ titulo: '', url: '', describe: '' }] }]);
  };

  const addVideoSection = (contentIndex) => {
    const newConteudos = [...conteudos];
    newConteudos[contentIndex].videos.push({ titulo: '', url: '', describe: '' });
    setConteudos(newConteudos);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const formData = {
        icon: event.target.icon ? event.target.icon.value : '',
        nome: event.target.nome ? event.target.nome.value : '',
        describe: event.target.describe ? event.target.describe.value : '',
        author: user ? user.id : '',
        rate: 0,
        conteudos: conteudos.map((conteudo) => ({
          titulo: conteudo.titulo,
          videos: conteudo.videos.map((video) => ({
            titulo: video.titulo,
            url: video.url,
            describe: video.describe
          }))
        }))
      };
    
      const response = await axios.post('http://localhost:3000/cursos', formData);
    
      console.log(response.data);
      alert("Curso cadastrado com sucesso!");
    
      const cursoId = response.data.id;
 
      const cursosMinistrados = Array.isArray(user.cursosMinistrados) ? user.cursosMinistrados : [];
    
      
      const updatedCursosMinistrados = [...cursosMinistrados, cursoId];
    

      const cursosInscritos = Array.isArray(user.cursosInscritos) ? user.cursosInscritos : [];
    
  
      const updatedCursosInscritos = [...cursosInscritos];
    

      const updatedUser = { ...user, cursosMinistrados: updatedCursosMinistrados, cursosInscritos: updatedCursosInscritos };
    
   
      await axios.put(`http://localhost:3000/usuarios/${user.id}`, updatedUser);
    
    } catch (error) {
      console.error("Erro ao cadastrar o curso:", error);
      alert("Houve um erro ao cadastrar o curso. Tente novamente mais tarde.");
    }
  };

  return (
    <Layout>
      <div className='form'>
        <div className='curso-container'>
          <TextField
            id='nome'
            name='nome'
            type='text'
            placeholder='Insira um título para seu curso'
            className='input'
          />
          <TextField
            id='icon'
            name='icon'
            type='text'
            placeholder='Insira o endereço de imagem para seu curso'
            className='input'
          />
          <TextField
            id='describe'
            name='describe'
            type='text'
            placeholder='Faça uma breve descrição do seu curso'
            className='input'
          />
        </div>
        <div className='contents'>
          {conteudos.map((conteudo, contentIndex) => (
            <div key={contentIndex} className='conteudo-section'>
              <h4>Conteúdo {contentIndex + 1}</h4>
              <TextField
                id={`conteudo-titulo-${contentIndex}`}
                name={`conteudos[${contentIndex}].titulo`}
                type='text'
                placeholder='Título do Conteúdo'
                value={conteudo.titulo}
                onChange={(e) => handleInputChange(contentIndex, undefined, 'titulo', e.target.value)}
                className='input'
              />
              <div className='container-videos'>
                {conteudo.videos.map((video, videoIndex) => (
                  <div key={videoIndex} className='video-section'>
                    <h5>Vídeo {videoIndex + 1}</h5>
                    <TextField
                      id={`video-titulo-${contentIndex}-${videoIndex}`}
                      name={`conteudos[${contentIndex}].videos[${videoIndex}].titulo`}
                      type='text'
                      placeholder='Título do Vídeo'
                      value={video.titulo}
                      onChange={(e) => handleInputChange(contentIndex, videoIndex, 'titulo', e.target.value)}
                      className='input-box'
                    />
                    <TextField
                      id={`video-url-${contentIndex}-${videoIndex}`}
                      name={`conteudos[${contentIndex}].videos[${videoIndex}].url`}
                      type='text'
                      placeholder='URL do Vídeo'
                      value={video.url}
                      onChange={(e) => handleInputChange(contentIndex, videoIndex, 'url', e.target.value)}
                      className='input-box'
                    />
                    <TextField
                      id={`video-describe-${contentIndex}-${videoIndex}`}
                      name={`conteudos[${contentIndex}].videos[${videoIndex}].describe`}
                      type='text'
                      placeholder='Descrição do Vídeo'
                      value={video.describe}
                      onChange={(e) => handleInputChange(contentIndex, videoIndex, 'describe', e.target.value)}
                      className='input-box'
                    />
                  </div>
                ))}
              </div>
              <Button
                type='button'
                name='Adicionar Vídeo'
                variant='button-content'
                onClick={() => addVideoSection(contentIndex)}
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        type='button'
        name='Adicionar Conteúdo'
        variant='button-content'
        onClick={addContentSection}
      />
      <Button
        type='submit'
        name='Registrar'
        variant='button-filled'
        onClick={handleSubmit}
      />
    </Layout>
  );
};

export default Cadastro;
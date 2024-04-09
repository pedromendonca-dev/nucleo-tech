import React, { useState } from 'react';
import Layout from "../../layout";
import { useParams } from 'react-router-dom';
import courses from "../../constants/cursos";
import './style.scss';
import YouTube from 'react-youtube';

const Cursos = () => {
  const { id } = useParams();
  const courseId = parseInt(id);
  const curso = courses.find(curso => curso.id === courseId);

  const [expandedItem, setExpandedItem] = useState(-1);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoDescricao, setVideoDescricao] = useState('')

  const handleItemClick = (index) => {
    setExpandedItem(expandedItem === index ? -1 : index);
  };

  const handleVideoClick = (videoUrl,videoDescricao) => {
    setVideoUrl(videoUrl); 
    setVideoDescricao(videoDescricao);
  };

  return (
    <Layout>
      <div className="curso-container">
        <div className='conteudos-container'>
          {curso.conteudos.map((conteudo, index) => (
            <div key={index}>
              <h3 onClick={() => handleItemClick(index, conteudo.videoUrl)}>{conteudo.titulo}</h3>
              {expandedItem === index && (
                <ul>
                  {conteudo.videos.map((video, videoIndex) => (
                    <li key={videoIndex}>
                      <a href="#" onClick={() => handleVideoClick(video.url, video.describe)}>{video.titulo}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className='videocontainer'>
          {videoUrl && (
            <YouTube
              videoId={videoUrl}
              opts={{
                width: '560',
                height: '315',
                playerVars: {
                  autoplay: 1
                }
              }}
            />
          )}
          <p>{videoDescricao}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Cursos;
import React, { useEffect, useState } from 'react';
import Layout from "../../layout";
import { useParams } from 'react-router-dom';
import './style.scss';
import YouTube from 'react-youtube';
import axios from "axios"

const Cursos = () => {

  const [curso, setCurso] = useState()
  const { id } = useParams();
  const [expandedItem, setExpandedItem] = useState(-1);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoDescricao, setVideoDescricao] = useState('')


useEffect(()=>{
  console.log(`http://localhost:3000/cursos/${id}`);
  axios.get(`http://localhost:3000/cursos/${id}`).then((res)=>{
    setCurso(res.data);
  })
})


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
          {curso?.conteudos?.map((conteudo, index) => (
            <div key={curso.index}>
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
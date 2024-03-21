import Layout from "../../layout";
import VideoPlayer from "../../components/Videoplayer";
import "./style.scss";

const Cursojava = () => {
  const videoId = "EpXYPB1rv4w";
  const description = "Aqui podemos ver o vídeo de Java intermediário";

  return (
    <Layout>
      <div className="curso-java-container">
        <div className="video-container">
          <VideoPlayer className="videoplayer" videoId={videoId} />
        </div>
        <div className="descricao-container">
          <h2>Descrição</h2>
          <p>{description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Cursojava;

import Layout from "../../layout"
import VideoPlayer from "../../components/Videoplayer";
import "./style.scss";


const Cursoreact = () => {


  const videoId = "YVEVrigByKY";
  const description = "Aqui podemos ver o vídeo de React avançado";

  return (
    <Layout>
      <div className="curso-react-container">
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
}


export default Cursoreact;
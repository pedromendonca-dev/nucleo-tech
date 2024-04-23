import React from 'react';
import YouTube from 'react-youtube';

//PEDRO! não era melhor por esses styles em um scss?

const VideoPlayer = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default VideoPlayer;

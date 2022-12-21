import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({url,channel,discription,song,likes,messages,shares}) {
  
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    // This plays and Stops the video.
    if(playing){
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };


  return (
    <div className='video'>
      <video 
      onClick={handleVideoPress}
      className='video__player'
      loop
      ref={videoRef}
      src={url}>
      </video>


      {/* VideoFooter */}

      <VideoFooter channel={channel} discription={discription} song={song}/>

      {/* VideoSidebar*/}

      <VideoSidebar likes={likes} shares={shares} messages={messages}/>

    </div>
  );
}



export default Video;

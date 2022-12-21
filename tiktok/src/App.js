import React, { useEffect, useState } from 'react'
import './App.css';
import Video from './Video';
import axios from './axios';

function App() {

  const [videos,setVideos] = useState([]);

  useEffect(() =>{
    async function fetchPost(){
      const response = await axios.get('/v2/posts');
        console.log(response)
        setVideos(response.data);
        return response;
  }; 
     fetchPost();

  }, [])

  console.log(videos);

  return (
    <div className="app">
      {/*App Container */}

      {/* Videos */}
      <div className='app__videos'>

          {videos.map(({url,channel,discription,song,likes,messages,shares}) => (
          
          <Video 
          url={url}
          channel={channel}
          discription={discription}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          />

        )
        
        )}

      </div>
    </div>
  );
}

export default App;

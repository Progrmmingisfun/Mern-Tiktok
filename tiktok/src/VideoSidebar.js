import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSidebar({likes,shares,messages}) {
  const [liked,setLiked] = useState(false);
  const [shared,setShared] = useState(false);

  return (
    <div className='videoSidebar'>
      <div className='videoSidebar__button'>
        {liked ?  (
          <FavoriteIcon fontSize='large' onClick = {(e) => setLiked(false)}/>
        ) : (
          <FavoriteBorderIcon 
          fontSize='large'
          onClick={(e) => setLiked (true)}
          />
        )}
        <p>{liked ? likes +1 : likes}</p>
      </div>
      <div className='videoSidebar__button'>
        <MessageIcon fontSize='large'/>
        <p>{messages}</p>
      </div>
      <div className='videoSidebar__button'>
      {shared ?  (
          <ShareIcon fontSize='large' onClick = {(e) => setShared(false)}/>
        ) : (
            <ShareIcon
            fontSize='large'
            onClick={(e) => setShared(true)}
            />
          )}
        <p>{shared ? shares+1 : shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar;

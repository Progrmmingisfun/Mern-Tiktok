import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';
//import AlbumIcon from '@mui/icons-material/Album';



function VideoFooter({channel,discription,song}) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@{channel}</h3>
        <p>{discription}</p>
        <div className='videoFooter__ticker'>
            <MusicNoteIcon className='videoFooter__icon'/>

            <Ticker mode='smooth'>
                {({ index }) => (
                    <>
                      <p>{song}</p>
                    </>
                )}
           </Ticker>
           
        </div>
      </div>
      <img className='videoFooter__record' src="https://stariz.pk/wp-content/uploads/2022/10/blank-cd-r-stariz-pk.jpg" alt=""/>
    </div>
  );
}


export default VideoFooter;

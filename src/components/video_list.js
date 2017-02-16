import React from 'react';
import VideoListItem from './video_list_item'; //importo il componente che va contenuto nel componente padre

//onVideoSelect and videos provengono dal componente che si trova al livello più alto
const VideoList = ({onVideoSelect,videos})=>{ //you can also use props and select the data below with props.onVideoSelect

  const videoItems = videos.map((video)=>{
    //aggiungiamo un etag per creare degli item uno diverso dell'altro
    return (
      <VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />
    ) //la map prende ogni elemento dell'array videos e costruisce
  })

    /*si consiglia di usare le mappe per fare gli iteratori*/
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;

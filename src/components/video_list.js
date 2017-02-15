import React from 'react';
import VideoListItem from './video_list_item'; //importo il componente che va contenuto nel componente padre

const VideoList = (props)=>{

  const videoItems = props.videos.map((video)=>{
    //aggiungiamo un etag per creare degli item uno diverso dell'altro
    return <VideoListItem key={video.etag} video={video} /> //la map prende ogni elemento dell'array videos e costruisce
  })

    /*si consiglia di usare le mappe per fare gli iteratori*/
  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;

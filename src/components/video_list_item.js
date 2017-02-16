import React from 'react'

const VideoListItem=({video, onVideoSelect})=>{
  //const video=props.video ----- {video} in the argument is equal to this instruction
  //const onVideoSelect = props.onVideoSelect ----- per evitare di dichiarare così mettiamo direttamente nella forma ({video, onVideoSelect})=> ecc.
  //{video} è una props del componente padre
  const imageUrl=video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}></img>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;

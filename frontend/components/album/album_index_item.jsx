import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = ({album}) => {
  return(
    <div>
    <div className="album-index-item-container">
      <img className="album-img" src={album.cover_photo ? album.cover_photo : "https://i.stack.imgur.com/IHLNO.jpg" }></img>
    </div>
    <div className="album-index-item-info">
      <div className="center">{album.title}</div>
      <div className="center">{album.description ? album.description : "No Description"}</div>
      <div className="center"><h1>Photos: {album.photo_count}</h1></div>
    </div>
    </div>
  );
};

export default AlbumIndexItem;

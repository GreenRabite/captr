import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = ({album}) => {
  return(
    <div>
    <div className="album-index-item-container animated fadeInLeft paper">
      <Link to={`/albums/${album.id}`}>
      <div className="content">
        <div className="content-overlay"></div>
          <img className="content-image" src={album.cover_photo ? album.cover_photo : "https://i.stack.imgur.com/IHLNO.jpg" }></img>
          <div className="album-index-item-info content-details fadeIn-top">
            <div className="center"><h3>{album.title}</h3></div>
            <div className="center"><p>{album.owner}</p></div>
            <div className="center"><p>{album.description ? album.description : "No Description"}</p></div>
            <div className="center"><p>Photos: {album.photo_count}</p></div>
          </div>

      </div>
    </Link>
    </div>
  </div>
  );
};

export default AlbumIndexItem;

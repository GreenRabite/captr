import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({photo}) => {

  return (
    <div className="photo-index-item">
      <div className="photo-index-item-container">
        <Link to={`/photos/${photo.id}`}>
          <img src={`${photo.img_url}`}/>
        </Link>

      </div>
      <div className="photo-index-item-hover">
        <h4>{photo.title}</h4>
        <h5>{photo.owner}</h5>
      </div>
    </div>
  );
};

export default PhotoIndexItem;

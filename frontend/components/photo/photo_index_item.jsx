import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({photo, isLastPhoto}) => (
      <div className="wrapper">
        <Link to={`/photos/${photo.id}`}>
          <img className={`masonry-item photo-index-item hover animated ${isLastPhoto ? 'last-photo' : ''}`} src={`${photo.thumb_url}`}/>
          <p className="text">{photo.title}</p>
        </Link>
    </div>
  );

export default PhotoIndexItem;

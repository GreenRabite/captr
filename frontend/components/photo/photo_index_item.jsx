import React from 'react';
import { Link } from 'react-router-dom';

//comment Out
// <div className="photo-index-item">
// <div className="photo-index-item-container">

// <div className="photo-index-item-hover">
//   <h4>{photo.title}</h4>
//   <h5>{photo.owner}</h5>
// </div>


const PhotoIndexItem = ({photo}) => {

  return (

      <div className="wrapper">
        <Link to={`/photos/${photo.id}`}>
          <img className="masonry-item photo-index-item hover" src={`${photo.img_url}`}/>
          <p className="text">{photo.title}</p>
        </Link>

    </div>
  );
};

export default PhotoIndexItem;

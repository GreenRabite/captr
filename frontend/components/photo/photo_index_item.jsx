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
  debugger;
  return (

      <div className="wrapper">
        <Link to={`/photos/${photo.id}`}>
          <img className="masonry-item photo-index-item hover animated fadeIn" src={`${photo.thumb_url}`}/>
          <p className="text">{photo.title}</p>
        </Link>

    </div>
  );
};

export default PhotoIndexItem;

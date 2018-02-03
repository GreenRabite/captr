import React from 'react';

const PhotoIndexItem = ({photo}) => {

  return (
    <div className="photo-index-item">
      <div className="photo-index-item-container">
        <img src={`${photo.img_url}`}/>
      </div>
      <div className="photo-index-item-hover">
        <h4>{photo.title}</h4>
        <h5>{photo.owner}</h5>
      </div>
    </div>
  );
};

export default PhotoIndexItem;

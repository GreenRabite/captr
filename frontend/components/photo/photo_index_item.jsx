import React from 'react';

const PhotoIndexItem = ({photo}) => {
  return (
    <div className="photo-index-item">
      <img src={`${photo.img_url}`}/>
      <h4>{photo.title}</h4>
      <h6>{photo.description ? photo.description : "No Description"}</h6>
    </div>
  );
};

export default PhotoIndexItem;

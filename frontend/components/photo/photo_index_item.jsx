import React from 'react';

const PhotoIndexItem = ({photo}) => {
  return (
    <div>
      <img src={`${photo.img_url}`}/>
    </div>
  );
};

export default PhotoIndexItem;

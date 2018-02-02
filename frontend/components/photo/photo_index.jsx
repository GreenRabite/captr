import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchPhotos();
  }

  render(){
    let PhotoIndexItems = this.props.photos.map((photo)=> {
      return <PhotoIndexItem key={photo.id} photo={photo}/>;
    });
    return(
      <div className="photo-index-container" >
        {PhotoIndexItems}
      </div>
    );
  }
}


export default PhotoIndex;

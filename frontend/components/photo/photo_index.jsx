import React from 'react';
import PhotoIndexItem from './photo_index_item';
import LoadingScreen from './../ui_loading_screen';
import { hasScrollIntoView } from 'utils/scroll_utils';
import { countAllPhotos } from 'utils/photo_api_utils';

class PhotoIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      totalCount: null
    }
    this.retrieveMorePhotos = this.retrieveMorePhotos.bind(this)
    this.hasAllPhotosLoaded = this.hasAllPhotosLoaded.bind(this)
  }

  componentDidMount(){
    this.props.fetchPhotos();
    countAllPhotos().done(results=>{
      this.setState({
        totalCount: results.totalCount
      })
    })
    document.addEventListener('scroll', this.retrieveMorePhotos)
  }

  retrieveMorePhotos(){
    let lastPhoto = document.querySelector('.last-photo');
    if (lastPhoto && this.hasAllPhotosLoaded() && hasScrollIntoView(lastPhoto)){
      this.props.fetchMorePhotos(this.props.photos.length)
    }
  }

  hasAllPhotosLoaded(){
    return this.state.totalCount !== this.props.photos.length;
  }


  render(){
    if (this.props.loading) {
      return(
        <LoadingScreen />
      );
    }else{
      return(
        <div className="appBG captrBG">
          <div className="masonry">
            {this.props.photos.map((photo, idx) => <PhotoIndexItem key={photo.id} photo={photo} isLastPhoto={this.props.photos.length - 1 === idx} />) }
            {!this.hasAllPhotosLoaded && <div>Loading...</div>}
          </div>
        </div>
      );
    }
  }
}


export default PhotoIndex;

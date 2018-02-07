import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  render(){
    if (this.props.album === undefined || this.props.album.album_photos === undefined ) {
      return null;
    }
      let photos = Object.values(this.props.album.album_photos);
      let AlbumShowItems = photos.map((photo)=>{
        return(
          <div>
            <Link to={`/photos/${photo.id}`}>
              <img className="album-show-img" src={photo.img_url} key={photo.id}/>
            </Link>
          </div>
        );
      });
    return(
      <div>
        <div className="url-headers captrBG"><h1>{this.props.album.title}</h1></div>
        <div></div>
          <div className="captrBG">
            <div className="album-photos-container">
              <Link to={`/albums/${this.props.match.params.albumId}/photos/new`}>
                <div className="album-show-img icon-stack"><i className="fas fa-upload fa-10x"></i></div>
              </Link>
              {AlbumShowItems}
            </div>
          </div>
          <div className="empty-spacer captrBG"></div>
        </div>
    );
  }
}

export default AlbumShow;

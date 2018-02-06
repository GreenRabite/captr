import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  componentWillReceiveProps(){

  }

  render(){
    if (!this.props.album.album_photos) {
      return null;
    }
    debugger;
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
          <div className="captrBG">
            <div className="album-photos-container">
              {AlbumShowItems}
            </div>
          </div>
          <div className="empty-spacer captrBG"></div>
        </div>
    );
  }
}

export default AlbumShow;

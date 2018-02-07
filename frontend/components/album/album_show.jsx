import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  constructor(props){
    super(props);
    this.deleteAlbum = this.deleteAlbum.bind(this);
  }

  componentDidMount(){
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  deleteAlbum(){
    debugger;
    if (window.confirm("Are you sure you want to delete this?")) {
      (this.props.deleteAlbum(this.props.match.params.albumId)).then(()=>
      this.props.history.push(`/albums`));
    }
  }


  render(){
    if (this.props.album === undefined || this.props.album.album_photos === undefined ) {
      return (
        <div className="appBG">
          <div className="album-photos-container">
            <Link to={`/albums/${this.props.match.params.albumId}/photos/new`}>
              <div className="album-show-img icon-stack"><i className="fas fa-upload fa-10x"></i></div>
            </Link>
          </div>
        </div>
      );
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
      <div className="appBG">
        <div className="url-headers captrBG"><h1>{this.props.album.title}</h1></div>
          <div>
            <div className="album-show-bttn-container" >
              <Link to={`/albums/${this.props.match.params.albumId}/edit`}><button className="bttn-gradient photo-bttn">Edit</button></Link>
              <button onClick={this.deleteAlbum} className="bttn-gradient photo-bttn">Delete</button>
            </div>
          </div>
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

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
    if (window.confirm("Are you sure you want to delete this?")) {
      (this.props.deleteAlbum(this.props.match.params.albumId)).then(()=>
      this.props.history.push(`/albums`));
    }
  }


  render(){
    if (this.props.album === undefined || this.props.album.album_photos === undefined ) {
      return (
        <div className="appBG">
          <div className="empty-spacer">.</div>
          <div className="album-photos-container">
            <Link to={`/albums/${this.props.match.params.albumId}/photos/new`}>
              <div className="album-show-img icon-stack"><i className="fas fa-upload fa-10x"></i></div>
            </Link>
            <div className="album-show-bttn-container" >
              <Link to={`/albums/${this.props.match.params.albumId}/edit`}><button className="main-bttn photo-bttn">Edit</button></Link>
              <button onClick={this.deleteAlbum} className="main-bttn photo-bttn">Delete</button>
            </div>
          </div>
        </div>
      );
    }
      let photos = Object.values(this.props.album.album_photos);
      let AlbumShowItems = photos.map((photo)=>{
        return(
          <div>

          <div className="empty-spacer2"></div>
            <Link to={`/photos/${photo.id}`}>
              <div className="content space">
                <div className="content-overlay"></div>
                <img className="content-image" src={photo.img_url} key={photo.id}/>
                <div className="content-details fadeIn-top">
                  <div className="center"><h3>{photo.title}</h3></div>
                  <div className="center"><p>{photo.description ? photo.description : "No Description" }</p></div>
                </div>
              </div>
            </Link>
          </div>
        );
      });
      let hiddenItem;
      if (parseInt(this.props.currentUser.id) === this.props.album.owner_id) {
        hiddenItem = (
          <div>
            <div className="album-show-bttn-container" >
              <Link to={`/albums/${this.props.match.params.albumId}/edit`}><button className="main-bttn photo-bttn">Edit</button></Link>
              <button onClick={this.deleteAlbum} className="main-bttn photo-bttn">Delete</button>
            </div>
          </div>
        );
      }
      let hiddenItem2;
      if (parseInt(this.props.currentUser.id) === this.props.album.owner_id) {
        hiddenItem2 = (
          <Link to={`/albums/${this.props.match.params.albumId}/photos/new`}>
            <div className="empty-spacer2">.</div>
            <div className="content space">
              <div className="content-overlay"></div>
              <div className="album-show-img icon-stack content-image-icon"><i className="fas fa-upload fa-10x"></i></div>
              <div className="content-details fadeIn-top">
                <div className="center"><h3>New Photo</h3></div>
                <div className="center"><p>Upload Here</p></div>
              </div>
            </div>
          </Link>
        );
      }
    return(
      <div className="appBG">
        <div className="url-headers captrBG">
          <h1>{this.props.album.title} by {this.props.album.owner}</h1> <br></br>
        </div>
          {hiddenItem}
        <div></div>
          <div className="captrBG">
            <div className="album-photos-container  animated pulse">
              {hiddenItem2}
              {AlbumShowItems}
            </div>

          </div>
          <div className="empty-spacer captrBG"></div>
        </div>
    );
  }
}

export default AlbumShow;

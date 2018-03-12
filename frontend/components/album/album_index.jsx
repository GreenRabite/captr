import React from 'react';
import AlbumIndexItem from './album_index_item';
import LoadingScreen from './../ui_loading_screen';
import { Link } from 'react-router-dom';
import PhotoModal from './../photo/photo_modal';

class AlbumIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAlbums();
  }

  // <i className="far fa-folder fa-10x"></i>

  render(){
    let AlbumIndexItems = this.props.albums.map((album) => {
      return <AlbumIndexItem key={album.id} album={album} />;
    });
    if (this.props.loading) {
      return(
        <LoadingScreen />
      );
    }else{
      return(
        <div className="appBG">
          <div className="url-headers captrBG"><h1>ALBUMS</h1></div>
          <div className="captrBG">
            <div className="album-index-container">
              <Link to="/albums/new">
                <div className="album-index-item-container animated fadeInLeft paper icon-stack">
                <div className="content">
                  <div className="content-overlay"></div>
                    <div className="content-image-icon center-album new-album"><img className="" src={window.staticImage.newAlbum}/></div>
                    <div className="album-index-item-info content-details fadeIn-top">
                      <div className="center"><h3>New Album</h3></div>
                      <div className="center"><p>Click Here to Create Your Own Albums</p></div>
                    </div>
                  </div>
                </div>
              </Link>
              {AlbumIndexItems}
              <img></img>
            </div>
          </div>
          <div className="empty-spacer captrBG"></div>
        </div>
      );
    }
  }
}

export default AlbumIndex;

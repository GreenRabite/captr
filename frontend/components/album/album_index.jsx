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
          <div className="url-headers captrBG"><h1>Albums</h1></div>
          <div className="captrBG">
            <div className="album-index-container">
              <Link to="/albums/new">
                <div className="album-index-item-container paper icon-stack"><i className="fas fa-upload fa-10x"></i></div>
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

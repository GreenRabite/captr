import React from 'react';
import AlbumIndexItem from './album_index_item';
import LoadingScreen from './../ui_loading_screen';

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
        <div>
          <div className="url-headers captrBG"><h1>Albums</h1></div>
          <div className="captrBG">
            <div className="album-index-container">
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

import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum } from './../../actions/album_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.albumId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchAlbum: (id) => dispatch(fetchAlbum(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AlbumShow);

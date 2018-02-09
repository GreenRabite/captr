import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum, deleteAlbum } from './../../actions/album_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    album: state.entities.albums[ownProps.match.params.albumId],
    photos: state.entities.photos,
    currentUser: state.session.currentUser,
    loading: state.ui.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchAlbum: (id) => dispatch(fetchAlbum(id)),
    deleteAlbum: (id) => dispatch(deleteAlbum(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AlbumShow);

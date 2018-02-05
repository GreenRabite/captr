import { connect } from 'react-redux';
import { fetchAlbums } from './../../actions/album_actions';
import AlbumIndex from './album_index';

const mapStateToProps = (state) => {
  return({
    albums: Object.values(state.entities.albums),
    loading: state.ui.loading
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);

import { connect } from 'react-redux';
import { updateAlbum, createAlbum, fetchAlbums } from './../../actions/album_actions';
import AlbumForm from './album_form';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) =>{
  let album = {title: "", description: ""};
  let formType= "new";
  if (ownProps.location.pathname.includes('edit')) {
    // album = Object.assign({}, album, state.entities.albums[ownProps.match.params.albumId]);
    album = state.entities.albums[ownProps.match.params.albumId];
    formType = "update";
  }
  debugger;
  return ({
    currentUser: state.session.currentUser,
    album,
    formType,
    redirectToNewPath: false
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateAlbum: (album) => dispatch(updateAlbum(album)),
  createAlbum: (newAlbum)=> dispatch(createAlbum(newAlbum)),
  fetchAlbums: ()=>dispatch(fetchAlbums())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AlbumForm));

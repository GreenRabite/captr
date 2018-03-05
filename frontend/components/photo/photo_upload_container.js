import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { updatePhoto, createPhotoNewAlbum, createPhotoBrandNewAlbum } from './../../actions/photo_actions';
import { fetchUserAlbums, createAlbum } from './../../actions/album_actions';
import PhotoUpload from './photo_upload';

const mapStateToProps = (state, ownProps) =>{
  let photo = {title: "", description: "", img_url: "", album_id: ""};

  return ({
    currentUser: state.session.currentUser,
    albums: state.entities.albums
  });
};

const mapDispatchToProps = (dispatch) => ({
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  createPhotoNewAlbum: (newPhoto)=> dispatch(createPhotoNewAlbum(newPhoto)),
  createPhotoBrandNewAlbum: (newPhoto)=> dispatch(createPhotoBrandNewAlbum(newPhoto)),
  fetchUserAlbums: (id)=>dispatch(fetchUserAlbums(id)),
  createAlbum: (newAlbum)=>dispatch(createAlbum(newAlbum))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PhotoUpload));

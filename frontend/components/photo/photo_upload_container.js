import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { updatePhoto, createPhoto } from './../../actions/photo_actions';
import { fetchAlbum } from './../../actions/album_actions';
import PhotoUpload from './photo_upload';

const mapStateToProps = (state, ownProps) =>{
  let photo = {title: "", description: "", img_url: "", album_id: ""};

  return ({
    currentUser: state.session.currentUser,
    photo,
    redirectToNewPath: false
  });
};

const mapDispatchToProps = (dispatch) => ({
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  createPhoto: (newPhoto)=> dispatch(createPhoto(newPhoto)),
  fetchAlbum: (id)=>dispatch(fetchAlbum(id))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PhotoUpload));

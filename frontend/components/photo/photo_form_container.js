import { connect } from 'react-redux';
import { updatePhoto, createPhoto } from './../../actions/photo_actions';
import { requestAlbums } from './../../actions/album_actions';
import PhotoForm from './photo_form';
import { withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) =>{
  let photo = {title: "", description: "", img_url: ""};
  let formType= "new";
  if (ownProps.location.pathname.includes('edit')) {
    photo = Object.assign({}, photo, state.entities.photos[ownProps.match.params.photoId]);
    formType = "update";
  }
  return ({
    currentUser: state.session.currentUser,
    photo,
    formType
  });
};

const mapDispatchToProps = (dispatch) => ({
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  createPhoto: (newPhoto)=> dispatch(createPhoto(newPhoto)),
  requestAlbums: ()=>dispatch(requestAlbums())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PhotoForm));

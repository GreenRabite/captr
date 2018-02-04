import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto } from './../../actions/photo_actions';
import { fetchPhotoComments } from './../../actions/comment_actions';


const mapStateToProps = (state,ownProps) => {
  return {
    photo: state.entities.photos[ownProps.match.params.photoId],
    comments: state.entities
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    fetchPhotoComments: (photoId) => dispatch(fetchPhotoComments(photoId))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(PhotoShow);

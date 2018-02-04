import { connect } from 'react-redux';
import { fetchPhotoComments, deleteComment } from './../../actions/comment_actions';
import CommentShow from './comment_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.session.currentUser,
    loading: state.ui.loading,
    comments: Object.values(state.entities.comments)
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  fetchPhotoComments: (photoId) => dispatch(fetchPhotoComments(photoId))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentShow));

import CommentForm from './comment_form';
import { connect } from 'react-redux';
import { updateComment, createComment } from './../../actions/comment_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let comment = {body: "" };
  let formType = "new";
  if (ownProps.match.path == "/photos/:photoId/comments/commentId/edit") {
    comment = state.comments[ownProps.match.params.photoId];
    formType = "update";
  }
  return ({ comment, formType });
};

const mapDispatchToProps = (dispatch) => ({
  updateComment: (comment)=> dispatch(updateComment(comment)),
  createComment: (newComment,photoId)=>dispatch(createComment(newComment,photoId))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentForm));

import React from 'react';
import LoadingScreen from './../ui_loading_screen';
import CommentShowItem from './comment_show_item';
import CommentFormContainer from './comment_form_container';


class CommentShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPhotoComments(this.props.match.params.photoId);
  }

  render(){
    if (this.props.loading) {
      return(
        <LoadingScreen />
      );
    }else {
      let CommentShowItems = this.props.comments.map((comment)=>{
        return <CommentShowItem key={comment.id} comment={comment} deleteComment={this.props.deleteComment}/>;
      });
      return(
        <div>
          <div className="comment-title">Comments</div>
          {CommentShowItems}
          <CommentFormContainer />
          <div className="empty-spacer"></div>
        </div>
      );
    }
  }
}

export default CommentShow;

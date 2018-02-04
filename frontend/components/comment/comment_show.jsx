import React from 'react';
import LoadingScreen from './../ui_loading_screen';
import CommentShowItem from './comment_show_item';


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
        return <CommentShowItem key={comment.id} comment={comment}/>;
      });
      return(
        <div>
          {CommentShowItems}
        </div>
      );
    }
  }
}

export default CommentShow;

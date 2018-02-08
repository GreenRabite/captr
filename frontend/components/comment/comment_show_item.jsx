import React from 'react';

const CommentShowItem = ({comment, deleteComment, currentUser}) => {
  let hiddenItem = <div className="hor-spacer"></div>;
  debugger;
  if (parseInt(currentUser.id) === comment.user_id) {
    hiddenItem = (
      <div onClick={()=>(deleteComment(comment.id))} >
        <i className="fas fa-times-circle"></i>
      </div>
    );
  }
  return(
    <div className='comment-show-item'>
      {hiddenItem}
      <div className="commenter-info">
        <img className="photo-show-user-info" src={comment.user_img ? `${comment.user_img}` :"https://i.stack.imgur.com/IHLNO.jpg"}></img>
      </div>
      <div className="dialogbox">
        <div className="body">
          <span className="tip tip-left"></span>
          <div className="message">
            <div className="comment-form-username">{`${comment.username}`}</div>
            <div className="comment-form-body">{`${comment.body}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentShowItem;

import React from 'react';

const CommentShowItem = ({comment}) => (
  <div className='comment-show-item'>
    <div className="commenter-info">
      <img className="photo-show-user-info" src={comment.user_img ? `${comment.user_img}` :"https://i.stack.imgur.com/IHLNO.jpg"}></img>
    </div>
    <div className="dialogbox">
      <div className="body">
        <span className="tip tip-left"></span>
        <div className="message">
          <div className="comment-form-username">{`${comment.username}`}</div>
          <div>{`${comment.body}`}</div>
        </div>
      </div>
    </div>
  </div>
);

export default CommentShowItem;

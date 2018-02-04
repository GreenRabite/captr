import React from 'react';

const CommentShowItem = ({comment}) => (
  <div>
    <h1>{`${comment.username}`}</h1>
    <h2>{`${comment.body}`}</h2>
  </div>
);

export default CommentShowItem;

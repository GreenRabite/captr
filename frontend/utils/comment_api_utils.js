export const fetchComments = (photoId) => (
  $.ajax({
    method: 'GET',
    url: `api/comments`,
    data: {photoId}
  })
);

export const fetchComment = (commentId) => (
  $.ajax({
    method: 'GET',
    url: `api/comments/${commentId}`,
    data: {commentId}
  })
);

export const updateComment = (comment) => (
  $.ajax({
    method: 'PATCH',
    url: `api/comments/${comment.id}`,
    data: {comment}
  })
);

export const createComment = (comment, photoId) => {
  return $.ajax({
    method: 'POST',
    url: `api/photos/${photoId}/comments`,
    data: {comment}
  });
};

export const deleteComment = (commentId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`
  })
);

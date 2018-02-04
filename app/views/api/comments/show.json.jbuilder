json.username @comment.user.username
json.user_img @comment.user.profile_img
json.extract! @comment, :id, :body, :user_id, :photo_id

@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :body, :user_id, :photo_id
    json.username comment.user.username
    json.user_img comment.user.profile_img
  end
end

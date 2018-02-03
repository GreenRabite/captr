@photos.each do |photo|
  json.set! photo.id do
    json.partial! 'photo', photo: photo
    json.owner photo.owner.username
  end
end

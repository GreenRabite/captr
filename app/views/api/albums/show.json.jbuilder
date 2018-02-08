json.owner @album.owner.username
json.owner_pro_img @album.owner.profile_img
json.owner_id @album.owner.id
json.album_photos do
  @album.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :title, :img_url
    end
  end
end
json.partial! 'album', album: @album

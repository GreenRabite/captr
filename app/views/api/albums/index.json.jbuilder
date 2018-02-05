@albums.each do |album|
  json.set! album.id do
    json.partial! 'album', album: album
    json.owner album.owner.username
    photo_hash=album.photos.sample
    if album.photos.length === 0
      json.cover_photo "http://www.bleedingneon.com/asyetunbroken/wp-content/uploads/2011/10/unknown_cover_450.jpg"
    else
      json.cover_photo album.photos.sample.img_url
    end
    json.photo_count album.photos.length
  end
end

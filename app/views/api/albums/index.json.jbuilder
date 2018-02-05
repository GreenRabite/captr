@albums.each do |album|
  json.set! album.id do
    json.partial! 'album', album: album
    json.owner album.owner.username
  end
end

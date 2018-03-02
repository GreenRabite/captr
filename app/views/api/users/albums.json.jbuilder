@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :description, :owner_id
  end
end

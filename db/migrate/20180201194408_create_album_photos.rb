class CreateAlbumPhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :album_photos do |t|
      t.integer :album_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end
    add_index :album_photos, [:album_id, :photo_id], unique:true
    add_index :album_photos, :photo_id
  end
end

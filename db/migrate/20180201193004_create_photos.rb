class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.text :description
      t.string :img_url, null: false
      t.integer :owner_id, null: false
      t.integer :album_id, null: false
      t.timestamps
    end
    add_index :photos, :owner_id
    add_index :photos, :album_id
    add_index :photos, :title
  end
end

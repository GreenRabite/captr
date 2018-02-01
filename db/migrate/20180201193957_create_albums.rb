class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.text :description
      t.integer :owner_id, null: false
      t.timestamps
    end
    add_index :albums, [:title, :owner_id], unique: true
    add_index :albums, :owner_id
  end
end

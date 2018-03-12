class AddThumbNailUrlForPhotos < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :thumb_url, :string
  end
end

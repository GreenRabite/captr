class ChangeThumbNailUrlNullFalse < ActiveRecord::Migration[5.1]
  def change
    change_column :photos, :thumb_url, :string, null: false
  end
end

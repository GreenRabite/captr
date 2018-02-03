class Photo < ApplicationRecord
  validates :title, :img_url, presence: true

  belongs_to :album,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: :Album

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  has_many :comments,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Comment
end

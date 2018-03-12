class Photo < ApplicationRecord
  validates :title, :img_url,:thumb_url, presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

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

  has_many :tags,
  through: :taggings,
  source: :tag

  has_many :taggings,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Tagging,
  dependent: :destroy,
  inverse_of: :photo
end

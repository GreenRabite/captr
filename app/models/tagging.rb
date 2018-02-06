class Tagging < ApplicationRecord
  validates :tag_id, uniqueness: { scope: :photo_id }

  belongs_to :tag,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: :Tag

  belongs_to :photo,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Photo
end

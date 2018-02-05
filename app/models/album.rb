class Album < ApplicationRecord
  validates :title, presence: true
  
  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  has_many :photos,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: :Photo

end

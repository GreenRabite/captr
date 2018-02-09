class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }
  after_initialize :ensure_lowercase

  has_many :taggings,
           primary_key: :id,
           foreign_key: :tag_id,
           class_name: :Tagging,
           dependent: :destroy

  has_many :tagged_photos,
           through: :taggings,
           source: :photo

  def ensure_lowercase
    self.name.downcase!
  end
end

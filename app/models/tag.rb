class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }
  after_initialize :ensure_lower_case!

  has_many :taggings,
  primary_key: :id,
  foreign_key: :tag_id,
  class_name: :Tagging,
  dependent: :destroy,
  inverse_of: :tag

  has_many :tagged_photos,
  through: :taggings,
  source: :photo

  private
  def ensure_lower_case!
    self.name.downcase!
  end
end

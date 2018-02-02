class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :fname, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :photos,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Photo

  has_many :albums,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Album

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    if @user && @user.valid_password?(password)
      @user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end

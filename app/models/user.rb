class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true, presence: true
  validates :email, uniqueness: true, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: {minimum: 6}
  has_many :vinyls, dependent: :destroy
  has_many :reviews, dependent: :destroy
end

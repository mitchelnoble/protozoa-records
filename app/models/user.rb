class User < ApplicationRecord
  validates :username, uniqueness: true, presence: true
  validates :email, uniqueness: true, presence: true
  has_many :vinyls, dependent: :destroy
  has_many :reviews, dependent: :destroy
end

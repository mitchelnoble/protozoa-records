class Vinyl < ApplicationRecord
  belongs_to :user
  has_many :genres, dependent: :destroy
  has_many :reviews, dependent: :destroy
end

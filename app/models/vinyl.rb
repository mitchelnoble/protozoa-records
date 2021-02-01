class Vinyl < ApplicationRecord
  belongs_to :user, optional: true
  has_many :reviews, dependent: :destroy
end

class AddVinylToReviews < ActiveRecord::Migration[6.1]
  def change
    add_reference :reviews, :vinyl, null: false, foreign_key: true
  end
end

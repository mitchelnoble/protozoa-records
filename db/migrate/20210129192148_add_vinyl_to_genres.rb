class AddVinylToGenres < ActiveRecord::Migration[6.1]
  def change
    add_reference :genres, :vinyl, null: false, foreign_key: true
  end
end

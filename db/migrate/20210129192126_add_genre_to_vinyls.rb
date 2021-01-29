class AddGenreToVinyls < ActiveRecord::Migration[6.1]
  def change
    add_reference :vinyls, :genre, null: false, foreign_key: true
  end
end

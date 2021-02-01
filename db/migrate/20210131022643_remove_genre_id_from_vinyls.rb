class RemoveGenreIdFromVinyls < ActiveRecord::Migration[6.1]
  def change
    remove_column :vinyls, :genre_id
  end
end

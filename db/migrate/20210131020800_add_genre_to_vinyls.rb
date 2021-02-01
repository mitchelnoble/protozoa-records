class AddGenreToVinyls < ActiveRecord::Migration[6.1]
  def change
    add_column :vinyls, :genre, :text, array: true, default: []
  end
end

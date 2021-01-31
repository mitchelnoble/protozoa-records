class ChangeColumnTypeToGenre < ActiveRecord::Migration[6.1]
  def change
    rename_column :genres, :type, :genre
  end
end

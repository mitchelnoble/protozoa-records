class DropGenresTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :genres, force: :cascade
  end
end

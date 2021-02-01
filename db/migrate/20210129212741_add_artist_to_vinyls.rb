class AddArtistToVinyls < ActiveRecord::Migration[6.1]
  def change
    add_column :vinyls, :artist, :string
  end
end

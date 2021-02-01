class AddImgUrlToVinyls < ActiveRecord::Migration[6.1]
  def change
    add_column :vinyls, :img_url, :string
  end
end

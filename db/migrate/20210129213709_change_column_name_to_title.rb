class ChangeColumnNameToTitle < ActiveRecord::Migration[6.1]
  def change
    rename_column :vinyls, :name, :title
  end
end

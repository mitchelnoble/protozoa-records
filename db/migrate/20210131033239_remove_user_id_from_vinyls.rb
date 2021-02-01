class RemoveUserIdFromVinyls < ActiveRecord::Migration[6.1]
  def change
    remove_column :vinyls, :user_id
  end
end

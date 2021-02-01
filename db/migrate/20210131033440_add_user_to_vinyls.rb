class AddUserToVinyls < ActiveRecord::Migration[6.1]
  def change
    add_reference :vinyls, :user, null: true, foreign_key: true
  end
end

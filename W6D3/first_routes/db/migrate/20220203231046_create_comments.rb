class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :user_id, index: true, null: false
      t.integer :artwork_id, index: true, null: false
      t.timestamps
    end
  end
end

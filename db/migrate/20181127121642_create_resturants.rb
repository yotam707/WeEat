class CreateResturants < ActiveRecord::Migration[5.2]
  def change
    create_table :resturants do |t|
      t.string :name
      t.string :cuisine
      t.integer :rating
      t.boolean :tenbis
      t.string :address
      t.integer :max_delivery_time

      t.timestamps
    end
  end
end

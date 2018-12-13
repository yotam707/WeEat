class CreateResturantRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :resturant_ratings do |t|
      t.integer :rating
      t.integer :resturant_id

      t.timestamps
    end
  end
end

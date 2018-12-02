class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :resturant_id
      t.string :reviewer_name
      t.string :rating
      t.string :comment

      t.timestamps
    end
  end
end

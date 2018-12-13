class AddRatingAvgValue < ActiveRecord::Migration[5.2]
  def change
    add_column :resturants, :rating, :float
  end
end

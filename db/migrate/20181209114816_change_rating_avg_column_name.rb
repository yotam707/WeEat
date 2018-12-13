class ChangeRatingAvgColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :resturants, :rating, :rating_avg
  end
end

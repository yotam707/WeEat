class RemoveRatingFromResurant < ActiveRecord::Migration[5.2]
  def change
    remove_column :resturants, :rating, :integer
  end
end

class Resturant < ApplicationRecord
    has_many :reviews, dependent: :destroy
    validates :name, :address, presence: true


    def rating
        if reviews.present?
            reviews.average(:rating).to_i
          else
            0
        end
    end

    #todo: add api filters
    
end

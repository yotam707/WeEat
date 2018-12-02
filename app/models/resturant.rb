class Resturant < ApplicationRecord
    has_many :reviews, dependent: :destroy
    validates :name, :address, presence: true

    def rating
        if reviews.present?
            reviews.average(:rating)
          else
            nil
        end
    end

    #todo: add api filters
    
end

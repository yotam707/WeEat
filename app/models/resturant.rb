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

      # Filtered
    def with_rating
        reviews.reject {|r| r.rating.blank?}
    end

    def no_rating
        reviews.reject {|r| r.rating.present?}
    end

     # API filters
    scope :tenbis, ->(tenbis) {
        where(tenbis: tenbis)
    }

    scope :cuisine, ->(cuisine) {
        where('lower(cuisine) = ?', cuisine.downcase)
    }

    scope :max_delivery_time, ->(max_delivery_time) {
        where('max_delivery_time <= ?', max_delivery_time)
    }
   
  scope :search, ->(param) {
    where('lower(name) like lower(:param) OR lower(address) like lower(:param) OR lower(cuisine) like lower(:param)',
          param: "%#{param}%")
  }

  scope :shortest, ->(param) {
    if param == 'true'
      order(:max_delivery_time)
    end
  }
    
end

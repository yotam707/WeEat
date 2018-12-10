class Resturant < ApplicationRecord
    include Filterable
    has_many :reviews, dependent: :destroy
    validates :name, uniqueness: true, presence: true
    validates :address, presence: true
    after_initialize :calc_rating_avg

    def calc_rating_avg
        if reviews.present?
            self.rating_avg = reviews.average(:rating).round
          else
            self.rating_avg = 0
        end
        save
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

    scope :rating_avg, ->(rating_avg) {
         where('rating_avg >= ? ', rating_avg.to_i)
    }
    scope :shortest, ->(param) {
        if param == 'true'
        order(:max_delivery_time)
        end
    }
    
end

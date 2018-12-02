json.extract! resturant, :id, :name, :cuisine, :tenbis, :address, :max_delivery_time

json.reviews resturant.reviews, partial: 'api/reviews/review', as: :review

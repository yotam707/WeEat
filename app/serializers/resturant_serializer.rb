class ResturantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :rating, :cuisine, :tenbis, :max_delivery_time
  has_many :reviews
end

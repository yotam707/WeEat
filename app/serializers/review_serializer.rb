# frozen_string_literal: true
# Review Serializer
class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :reviewer_name, :comment, :rating, :resturant_id
  belongs_to :resturant
end

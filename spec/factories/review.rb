# frozen_string_literal: true

FactoryBot.define do
  factory :review do
    reviewer_name          { Faker::Name.name }
    rating                 { Faker::Number.rand(3) }
    comment                { Faker::Lorem.sentence }
    resturant { FactoryBot.create(:resturant, :japanease) }

    trait :good do
      rating 3
    end

    trait :bad do
      rating 1
    end

    trait :wrong_rating do
      rating 5
    end

    trait :missing_name do
      name nil
    end
  end
end

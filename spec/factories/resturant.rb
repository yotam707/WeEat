FactoryBot.define do
    factory :resturant do
      name                  { Faker::Name.name }
      cuisine               { Faker::Food.ingredient }
      tenbis                { Faker::Boolean.boolean }
      address               { Faker::Address.street_name }
      max_delivery_time     { Faker::Number.between(from = 1, to = 5) }

      trait :japanease do
        cuisine "Japanease"
      end

      trait :missing_name do
        name nil
      end
    end
  end
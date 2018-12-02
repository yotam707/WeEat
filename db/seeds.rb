# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Resturant.delete_all
# ResturantRating.delete_all
Resturant.create! (
  [
    {
      name: "Oshi Oshi 1",
      cuisine: "Japanease",
      tenbis: true,
      address: "some address",
      max_delivery_time: 40
    },
    {
        name: "Oshi Oshi 2",
        cuisine: "Japanease",
        tenbis: true,
        address: "some address",
        max_delivery_time: 40
    },
    {
        name: "Oshi Oshi 3",
        cuisine: "Japanease",
        tenbis: true,
        address: "some address",
        max_delivery_time: 40
    },
    {
        name: "Oshi Oshi 4",
        cuisine: "Japanease",
        tenbis: true,
        address: "some address",
        max_delivery_time: 40
    },
    {
        name: "Oshi Oshi 5",
        cuisine: "Japanease",
        tenbis: true,
        address: "some address",
        max_delivery_time: 40
    }
  ]
)
puts "Resturant seeded!"

# ResturantRating.create! (
#     [
#         {
#             rating: 1,
#             resturant_id: 6
#         },
#         {
#             rating: 2,
#             resturant_id: 6
#         },
#         {
#             rating: 2,
#             resturant_id: 8
#         },
#         {
#             rating: 3,
#             resturant_id: 8
#         },
#         {
#             rating: 1,
#             resturant_id: 7
#         },
#         {
#             rating: 1,
#             resturant_id: 7
#         },
#         {
#             rating: 4,
#             resturant_id: 9
#         },
#         {
#             rating: 4,
#             resturant_id: 9
#         },
#     ]
# )

# puts "Resturant Rating seeded!"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Resturant.delete_all

Resturant.create! (
  [
    {
      name: "Oshi Oshi 1",
      cuisine: "Japanease",
      rating: 3,
      tenbis: true,
      address: "some address",
      max_delivery_time: 40
    },
    {
        name: "Oshi Oshi 2",
        cuisine: "Japanease",
        rating: 3,
        tenbis: true,
        address: "some address",
        max_delivery_time: 40
    },
    {
        name: "Oshi Oshi 3",
        cuisine: "Japanease",
        rating: 3,
        tenbis: true,
        address: "some address",
        max_delivery_time: 40
    },
    {
        name: "Oshi Oshi 4",
        cuisine: "Japanease",
        rating: 3,
        tenbis: true,
        address: "some address",
        max_delivery_time: 40
    },
    {
        name: "Oshi Oshi 5",
        cuisine: "Japanease",
        rating: 3,
        tenbis: true,
        address: "some address",
        max_delivery_time: 40
    }
  ]
)
puts "Resturant seeded!"
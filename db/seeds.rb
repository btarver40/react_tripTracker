20.times do
  trip = Trip.create(
    name: Faker::RickAndMorty.quote,
  )

 20.times do
   trip.locations.create(
    name: Faker::RickAndMorty.character,
    address: Faker::Commerce.price
  )
 end
end

# 10 items for every menu
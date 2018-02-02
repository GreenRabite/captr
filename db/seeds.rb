# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Album.destroy_all
Photo.destroy_all
User.create(username: "Rabite", password:"password", email: "green.rabite@gmail.com", fname:"Andy")
User.create(username: "dobrynin", password:"password", email: "dobrynin@gmail.com", fname:"David")
Album.create(title:"Arizona", owner_id:1)
Photo.create(title: "Cool Pic", img_url: "https://picsum.photos/200/300/?image=950", owner_id:1, album_id: 1)

10.times do
  User.create(username: Faker::Pokemon.name, password:"password", email:Faker::Internet.email, fname:"DemoUser")
  Album.create(title:Faker::LeagueOfLegends.location, owner_id:User.all.to_a.sample.id)
end

10.times do
  Photo.create(title: Faker::Pokemon.move, img_url: "https://picsum.photos/200/300/?image=#{rand(900-1)+1}", owner_id:User.all.to_a.sample.id, album_id: Album.all.to_a.sample.id)
  Photo.create(title: Faker::Pokemon.move, img_url: "https://picsum.photos/300/200/?image=#{rand(900-1)+1}", owner_id:User.all.to_a.sample.id, album_id: Album.all.to_a.sample.id)
  Photo.create(title: Faker::Pokemon.move, img_url: "https://picsum.photos/200/400/?image=#{rand(900-1)+1}", owner_id:User.all.to_a.sample.id, album_id: Album.all.to_a.sample.id)
end

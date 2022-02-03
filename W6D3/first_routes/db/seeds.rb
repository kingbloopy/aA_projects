# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# good practice always use create!
User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')  #make it so everytime it resets
ActiveRecord::Base.connection.reset_pk_sequence!('artworks')
ActiveRecord::Base.connection.reset_pk_sequence!('artwork_shares')

king = User.create!(username: 'kingbloopy')
z = User.create!(username: 'zwerbo')
mike = User.create!(username: 'mikeMADeson')

art1 = Artwork.create!(title: 'King of Bloops', image_url: 'drghdhfhf.///dfh', artist_id: mike.id)
art2 = Artwork.create!(title: 'Big Bloopies', image_url: '//fdgdfhdhsdjfnd', artist_id: mike.id)
art3 = Artwork.create!(title: 'Rath of the Bloop-Dusa', image_url: 'djfgnijd//dfg.com', artist_id: z.id)

share1 = ArtworkShare.create!(artwork_id: art3.id, viewer_id: z.id)
share2 = ArtworkShare.create!(artwork_id: art2.id, viewer_id: king.id)


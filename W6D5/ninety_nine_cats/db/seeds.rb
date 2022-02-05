# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do 
  Cat.destroy_all
  ActiveRecord::Base.connection.reset_pk_sequence!('cats')

  cat1 = Cat.create!(name: 'Bob', sex: 'M', color: 'purple', birth_date: '2020/01/20', description: 'fluffy boi')

  cat2 = Cat.create!(name: 'Wiggles', sex: 'F', color: :rainbow, birth_date: '2020/12/20', description: 'fluffiest')

  cat3 = Cat.create!(name: 'Joe', sex: 'M', color: 'rainbow', birth_date: '2019/01/20', description: 'smooth boi')

end
# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

  has_many :shares, dependent: :destroy,
    foreign_key: :viewer_id,
    class_name: :ArtworkShare

  has_many :artists, 
    foreign_key: :artist_id,
    class_name: :Artwork

  has_many :comments,
    foreign_key: :user_id,
    class_name: :Comment 

  has_many :shared_artworks, dependent: :destroy,
    through: :shares,
    source: :artwork





end

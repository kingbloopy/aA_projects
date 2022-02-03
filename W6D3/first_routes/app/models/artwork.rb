# == Schema Information
#
# Table name: artworks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  image_url  :text             not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artwork < ApplicationRecord
    validates :image_url, presence: true
    validates :title, presence: true

    has_many :shares, 
        foreign_key: :artwork_id,
        class_name: :ArtworkShare

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: :User

    has_many :shared_viewers,
        through: :shares,
        source: :viewer

    
    

end

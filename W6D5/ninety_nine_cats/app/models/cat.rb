# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  sex         :string(1)        not null
#  color       :string           not null
#  birth_date  :date             not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'date'

class Cat < ApplicationRecord
  COLORS = ['rainbow', 'unicorn', 'purple']
  validates :name, :sex, :color, :birth_date, :description, presence: true
  validates :color, inclusion: COLORS
  validates :sex, inclusion: ['M', 'F']

  def age
    2022 - self.birth_date.year
  end
end

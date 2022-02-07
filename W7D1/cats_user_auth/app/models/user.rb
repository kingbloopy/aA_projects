# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  user_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :user_name, :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true
  after_initialize :ensure_session_token

  

  def reset_session_token!

  end
end

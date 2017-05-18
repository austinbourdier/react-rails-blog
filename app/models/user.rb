class User < ApplicationRecord
  has_secure_password
  has_many :post
  has_many :attempt

  validates :email, presence: true, uniqueness: { message: "That email has already been taken" }

end

class Provider < ApplicationRecord
  has_many :client_providers, dependent: :destroy
  has_many :clients, through: :client_providers

  validates :email, presence: true, uniqueness: true
end

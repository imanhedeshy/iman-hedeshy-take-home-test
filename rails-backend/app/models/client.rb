class Client < ApplicationRecord
  has_many :client_providers, dependent: :destroy
  has_many :providers, through: :client_providers
  has_many :journal_entries, dependent: :destroy

  validates :email, presence: true, uniqueness: true
  validates :plan, inclusion: { in: %w[basic premium], message: "%{value} is not a valid plan" }
end

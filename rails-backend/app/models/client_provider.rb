class ClientProvider < ApplicationRecord
  belongs_to :client
  belongs_to :provider

  validates :client_id, uniqueness: { scope: :provider_id, message: "already associated with this provider" }
end

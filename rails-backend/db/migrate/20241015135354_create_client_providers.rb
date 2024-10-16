class CreateClientProviders < ActiveRecord::Migration[8.0]
  def change
    create_table :client_providers do |t|
      t.references :client, null: false, foreign_key: true
      t.references :provider, null: false, foreign_key: true

      t.timestamps
    end
    add_index :client_providers, [:client_id, :provider_id], unique: true
  end
end

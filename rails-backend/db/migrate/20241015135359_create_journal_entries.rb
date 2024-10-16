class CreateJournalEntries < ActiveRecord::Migration[8.0]
  def change
    create_table :journal_entries do |t|
      t.text :content
      t.references :client, null: false, foreign_key: true

      t.timestamps
    end

    unless index_exists?(:journal_entries, :client_id)
      add_index :journal_entries, :client_id
    end
  end
end

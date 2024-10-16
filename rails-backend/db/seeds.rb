# Providers
provider_1 = Provider.find_or_create_by!(name: 'John Doe', email: 'john@example.com')
provider_2 = Provider.find_or_create_by!(name: 'Jane Smith', email: 'jane@example.com')
provider_3 = Provider.find_or_create_by!(name: 'Dr. Greg House', email: 'greg.house@example.com')
provider_4 = Provider.find_or_create_by!(name: 'Dr. Meredith Grey', email: 'meredith.grey@example.com')

# Clients
client_1 = Client.find_or_create_by!(name: 'Alice Johnson', email: 'alice.johnson@example.com', plan: 'basic')
client_2 = Client.find_or_create_by!(name: 'Bob White', email: 'bob.white@example.com', plan: 'premium')
client_3 = Client.find_or_create_by!(name: 'Charlie Brown', email: 'charlie.brown@example.com', plan: 'basic')
client_4 = Client.find_or_create_by!(name: 'David Parker', email: 'david.parker@example.com', plan: 'premium')

# Associations
provider_1.clients << client_1 unless provider_1.clients.include?(client_1)
provider_2.clients << client_1 unless provider_2.clients.include?(client_1)
provider_2.clients << client_2 unless provider_2.clients.include?(client_2)

# Journal Entries
JournalEntry.find_or_create_by!(client: client_1, content: 'Feeling great today!')
JournalEntry.find_or_create_by!(client: client_1, content: 'Had a tough workout, but pushed through.')
JournalEntry.find_or_create_by!(client: client_2, content: 'Working on my mental health.')

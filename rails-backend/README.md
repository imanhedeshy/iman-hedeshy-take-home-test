# Rails Backend Challenge - Providers and Clients Management

This projectis a Rails API backend for modeling providers (e.g., dietitians), their clients, and journal entries. It addresses the requirements outlined in the challenge, utilizing ActiveRecord for database interactions and following best practices for a scalable and maintainable architecture.

## Project Overview

The project models these entities:

- **Providers**: Have a name and an email address, and can have many clients.
- **Clients**: Have a name, email address, and a paid plan (either "basic" or "premium"). A client can belong to multiple providers.
- **Journal Entries**: Text entries that clients can create to document their thoughts or experiences.

## Database Schema

The following migrations were created to define the database structure:

1. **Providers**:

   - `name`: string
   - `email`: string (unique index)

2. **Clients**:

   - `name`: string
   - `email`: string (unique index)
   - `plan`: string (validates inclusion in ["basic", "premium"])

3. **ClientProviders**: (Join table for many-to-many relationship)

   - `client`: references
   - `provider`: references

4. **JournalEntries**:
   - `content`: text
   - `client`: references

### Indexes

Indexes are added to the email fields for providers and clients to enforce uniqueness and improve lookup speed.

## Queries Implemented

The following queries are implemented as per the challenge requirements:

- **Find all clients for a particular provider**:

  ```ruby
  provider.clients
  ```

- **Find all providers for a particular client**:

  ```ruby
  client.providers
  ```

- **Find all of a particular client's journal entries, sorted by date posted**:

  ```ruby
  client.journal_entries.order(created_at: :desc)
  ```

- **Find all journal entries of all clients of a particular provider, sorted by date posted**:

  ```ruby
  provider.clients.includes(:journal_entries).flat_map(&:journal_entries).sort_by(&:created_at)
  ```

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/imanhedeshy/iman-hedeshy-take-home-test.git
   cd iman-hedeshy-take-home-test/rails-backend
   ```

1. **Install dependencies**:

   ```bash
   bundle install
   ```

1. **Set up the database**:

   ```bash
   rails db:create
   rails db:migrate
   rails db:seed
   ```

1. **Start the Rails server**:

   ```bash
   rails s
   ```

## Testing

The project includes tests for controllers and models using Rails' built-in testing framework. To run the tests:

    ``` bash
    rails test
    ```

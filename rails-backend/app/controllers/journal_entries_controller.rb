class JournalEntriesController < ApplicationController
  # List all journal entries for a client
  def index
    client = Client.find(params[:client_id])
    journal_entries = client.journal_entries.order(created_at: :desc).page(params[:page]).per(10)
    render json: journal_entries
  end

  # Get a specific journal entry
  def show
    journal_entry = JournalEntry.find(params[:id])
    render json: journal_entry
  end

  # Add a journal entry for a client
  def create
    client = Client.find(params[:client_id])
    journal_entry = client.journal_entries.new(journal_entry_params)
    
    if journal_entry.save
      render json: journal_entry, status: :created
    else
      render json: journal_entry.errors, status: :unprocessable_entity
    end
  end

  # Modify a journal entry
  def update
    journal_entry = JournalEntry.find(params[:id])

    if journal_entry.update(journal_entry_params)
      render json: journal_entry
    else
      render json: journal_entry.errors, status: :unprocessable_entity
    end
  end

  # Remove a journal entry
  def destroy
    journal_entry = JournalEntry.find(params[:id])
    journal_entry.destroy
    head :no_content
  end

  private

  def journal_entry_params
    params.require(:journal_entry).permit(:content)
  end
end

class ProvidersController < ApplicationController
  # List all providers
  def index
    providers = Provider.page(params[:page]).per(10)
    render json: providers
  end

  # Get a specific provider
  def show
    provider = Provider.includes(:clients).find(params[:id])
    render json: provider
  end

  # List all clients for a specific provider
  def clients
    provider = Provider.find(params[:id])
    render json: provider.clients
  end

  # List all journal entries for all clients of a provider
  def all_journal_entries
    provider = Provider.find(params[:id])
    journal_entries = JournalEntry.joins(:client).where(clients: { id: provider.clients.ids }).order(created_at: :desc)
    render json: journal_entries
  end

  # Add a provider
  def create
    provider = Provider.new(provider_params)
    if provider.save
      render json: provider, status: :created
    else
      render json: provider.errors, status: :unprocessable_entity
    end
  end

  # Modify a provider
  def update
    provider = Provider.find(params[:id])
    if provider.update(provider_params)
      render json: provider
    else
      render json: provider.errors, status: :unprocessable_entity
    end
  end

  # Remove a provider
  def destroy
    provider = Provider.find(params[:id])
    provider.destroy
    head :no_content
  end

  private

  def provider_params
    params.require(:provider).permit(:name, :email)
  end
end

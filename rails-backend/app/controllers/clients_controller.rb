class ClientsController < ApplicationController
  # List all clients
  def index
    clients = Client.page(params[:page]).per(10)
    render json: clients
  end

  # Get a specific client
  def show
    client = Client.includes(:journal_entries).find(params[:id])
    render json: client
  end

  # List all providers for a specific client
  def providers
    client = Client.find(params[:id])
    render json: client.providers
  end

  # Add a client
  def create
    client = Client.new(client_params)
    if client.save
      render json: client, status: :created
    else
      render json: client.errors, status: :unprocessable_entity
    end
  end

  # Modify a client
  def update
    client = Client.find(params[:id])
    if client.update(client_params)
      render json: client
    else
      render json: client.errors, status: :unprocessable_entity
    end
  end

  # Remove a client
  def destroy
    client = Client.find(params[:id])
    client.destroy
    head :no_content
  end

  private

  def client_params
    params.require(:client).permit(:name, :email, :plan)
  end
end

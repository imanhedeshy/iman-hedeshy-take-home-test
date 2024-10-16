Rails.application.routes.draw do
  # Provider routes
  resources :providers, except: [:new, :edit] do
    get 'clients', on: :member
    get 'all_journal_entries', on: :member
  end

  # Client routes
  resources :clients, except: [:new, :edit] do
    get 'providers', on: :member
    resources :journal_entries, only: [:index, :create]
  end

  # Journal Entry routes
  resources :journal_entries, only: [:show, :update, :destroy]
end

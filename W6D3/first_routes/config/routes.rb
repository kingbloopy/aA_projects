Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/users/:id', to: 'users#show'
  # get '/users', to: 'users#index'
  # post '/users', to: 'users#create'
  # patch '/users/:id', to: 'users#update'
  # delete '/users/:id', to: 'users#destroy'

  resources :users, except: [:patch, :put] do
    resources :artworks, only: [:index]
    resources :comments, only: [:index]
  end
  # GET /users/:user_id/artworks
  # get '/users/:user_id/comments', to: 'comments#com_index'

  resources :artworks, except: [:patch, :put, :index] do
    resources :comments, only: [:index]
  end

  resources :artwork_shares, only: [:create, :destroy]

  resources :comments, only: [:create, :destroy]
end

Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api, defaults: { format: :json } do
    resources :resturants, only: [ :index, :show, :create, :update, :destroy ] do
      resources :reviews, only: [ :index, :show, :create, :update, :destroy ]
    end
  end
end

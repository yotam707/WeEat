Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api, defaults: { format: :json } do
    resources :resturants, only: [ :index, :show, :create, :update, :destroy ] do
      resources :reviews
    end
  end
end

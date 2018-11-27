Rails.application.routes.draw do
  root to: 'home#index'
  namespace :api, defaults: { format: :json } do
    resources :resturant, only: [ :show ]
  end
end

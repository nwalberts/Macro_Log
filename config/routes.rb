Rails.application.routes.draw do
  root 'homes#index'

  resources :users, only: [:index, :destroy]

  resources :logs, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :logs, only: [:index, :show]
      resources :reviews, only: [:edit, :update]
    end
  end

  devise_for :users

  devise_scope :user do
    get "users/sign_out" => "devise/sessions#destroy"
  end

end

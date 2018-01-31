Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    # Static Page Controller
    root "static_pages#root"

    namespace :api, default: {format: :json} do
      resources :users, only: [:create, :show, :edit, :index]
      resource :session, only: [:create, :destroy]
    end
end

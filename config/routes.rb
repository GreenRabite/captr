Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    # Static Page Controller
    root "static_pages#root"

    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show, :edit, :index]
      resource :session, only: [:create, :destroy]
      resources :photos, except: [:new, :edit] do
        resources :comments, only: [:create]
      end
      resources :comments, only: [:index, :update, :destroy, :show]
      resources :albums, only: [:index, :create, :update, :destroy, :show]
      resources :tags, only: [:create, :show, :index], param: :name do
        resources :photos, only: [:index]
      end
    end
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    # Static Page Controller
    root "static_pages#root"

    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :show, :edit, :index] do
        get 'albums', :to => 'users#albums'
      end
      resource :session, only: [:create, :destroy]
      resources :photos, except: [:new, :create] do
        resources :comments, only: [:create]
      end
      get '/more_photos', to: 'photos#fetch_more_photos'
      get '/photo_count', to: 'photos#total_count'

      post :photos, :to =>  'photos#create_album_photo'
      resources :comments, only: [:index, :update, :destroy, :show]
      resources :albums, only: [:index, :create, :update, :destroy, :show] do
        resources :photos, only: [:create]
      end
      resources :tags, only: [:create, :show, :index], param: :name do
        resources :photos, only: [:index]
      end
    end
end

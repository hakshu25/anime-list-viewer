Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  defaults format: :json do
    namespace :api do
      get 'anime_lists/:year/:cour' => 'anime_lists#show'
    end
  end
end

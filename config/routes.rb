# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  defaults format: :json do
    namespace :api do
      get 'anime_lists/:year/:cour' => 'anime_lists#show',
          constraints: {
            year: /\d{4}/,
            cour: /\d{1}/
          }
      post 'anime_site_previews' => 'anime_site_previews#show'
    end
  end
end

# frozen_string_literal: true

module Api
  class AnimeSitePreviewsController < ApplicationController
    def show
      preview_image_url = AnimeSitePreview.new(anime_site_preview_params).image_url
      render json: { previewImageUrl: preview_image_url }
    end

    private

    def anime_site_preview_params
      params.require(:link_url)
    end
  end
end
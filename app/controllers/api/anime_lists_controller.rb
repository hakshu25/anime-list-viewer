# frozen_string_literal: true

module Api
  class AnimeListsController < ApplicationController
    def show
      @lists = AnimeList.new(params[:year], params[:cour]).all
    end
  end
end

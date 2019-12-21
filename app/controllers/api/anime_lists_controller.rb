# frozen_string_literal: true

module Api
  class AnimeListsController < ApplicationController
    def show
      @lists = AnimeList.term(params[:year], params[:cour])
    end
  end
end

# frozen_string_literal: true

require 'syobocal'

class AnimeList
  include ActiveModel::Model

  class << self
    COUR_MAP = {
      '1' => '01-01',
      '2' => '04-01',
      '3' => '07-01',
      '4' => '10-01'
    }.freeze

    def term(year, cour)
      Syobocal::JSON::TitleMedium.get(build_params(year, COUR_MAP[cour]))['Titles'].values
    end

    private

    def build_params(year, start_date)
      { 'Start' => "#{year}-#{start_date}", 'Days' => 120 }
    end
  end
end

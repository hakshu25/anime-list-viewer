# frozen_string_literal: true

require 'syobocal'

class AnimeList
  include ActiveModel::Model

  class << self
    COUR_MAP = {
      '1' => '1',
      '2' => '4',
      '3' => '7',
      '4' => '10'
    }.freeze

    def term(year, cour)
      Syobocal::JSON::TitleMedium.get['Titles'].values.select do |list|
        list['FirstYear'].eql?(year) && list['FirstMonth'].eql?(COUR_MAP[cour])
      end
    end
  end
end

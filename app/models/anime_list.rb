# frozen_string_literal: true

require 'syobocal'

class AnimeList
  include ActiveModel::Model

  COUR_MAP = {
    '1' => '01-01',
    '2' => '04-01',
    '3' => '07-01',
    '4' => '10-01'
  }.freeze

  def initialize(year, cour)
    @year = year
    @date = COUR_MAP[cour]
  end

  def all
    Syobocal::JSON::TitleMedium.get(build_params)['Titles'].values
  end

  private

  def build_params
    { 'Start' => "#{@year}-#{@date}", 'Days' => 120 }
  end
end

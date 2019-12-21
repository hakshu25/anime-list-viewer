# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AnimeList, type: :model do
  describe 'term' do
    before do
      allow(Syobocal::JSON::TitleMedium)
        .to receive(:get).and_return('Titles' => {})
    end

    it 'call syobocal get method' do
      year = '2019'
      cour = '1'
      params = { 'Start' => '2019-01-01', 'Days' => 120 }

      described_class.term(year, cour)

      expect(Syobocal::JSON::TitleMedium).to have_received(:get).with(params)
    end
  end
end

require 'rails_helper'

RSpec.describe AnimeList, type: :model do
  describe 'all' do
    before do
      allow(Syobocal::JSON::TitleMedium)
        .to receive(:get).and_return('Titles' => {})
    end

    it 'call syobocal get method' do
      year = '2019'
      cour = '1'
      params = { 'Start' => '2019-01-01', 'Days' => 120 }

      anime_list = described_class.new(year, cour)
      anime_list.all

      expect(Syobocal::JSON::TitleMedium).to have_received(:get).with(params)
    end
  end
end

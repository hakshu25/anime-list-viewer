# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AnimeList, type: :model do
  describe 'term' do
    before do
      allow(Syobocal::JSON::TitleMedium)
        .to receive(:get).and_return('Titles' => {
          '1' => {
            'TID' => '1',
            'Title' => 'anime',
            'Links' => [['http://hoge.com', 'オフィシャルサイト']],
            'FirstYear' => '2019',
            'FirstMonth' => '1'
          },
          '2' => {
            'TID' => '2',
            'Title' => 'anime',
            'Links' => [['http://hoge.com', 'オフィシャルサイト']],
            'FirstYear' => '2020',
            'FirstMonth' => '1'
          },
          '3' => {
            'TID' => '3',
            'Title' => 'anime',
            'Links' => [['http://hoge.com', 'オフィシャルサイト']],
            'FirstYear' => '2019',
            'FirstMonth' => '4'
          },
          '4' => {
            'TID' => '4',
            'Title' => 'anime',
            'Links' => [['http://hoge.com', 'オフィシャルサイト']],
            'FirstYear' => '2018',
            'FirstMonth' => '12'
          }
        })
      year = '2019'
      cour = '1'
      @list = described_class.term(year, cour)
    end

    it 'call syobocal get method' do
      expect(Syobocal::JSON::TitleMedium).to have_received(:get)
    end

    it 'return list of the target term' do
      expect(@list.size).to eq 1
      expect(@list).to eq [
        {
          'TID' => '1',
          'Title' => 'anime',
          'Links' => [['http://hoge.com', 'オフィシャルサイト']],
          'FirstYear' => '2019',
          'FirstMonth' => '1'
        }
      ]
    end
  end
end

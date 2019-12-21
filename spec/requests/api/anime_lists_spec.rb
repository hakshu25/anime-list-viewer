# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'AnimeLists', type: :request do
  describe 'GET api/anime_lists' do
    before do
      data = [{
        'TID' => '1',
        'Title' => 'anime',
        'Links' => [['http://hoge.com', 'オフィシャルサイト']]
      }]
      allow(AnimeList).to receive(:term).and_return(data)
      get '/api/anime_lists/2019/1'
    end

    it 'status 200' do
      expect(response).to have_http_status(200)
    end

    it 'valid response' do
      expect(JSON.parse(response.body).map(&:deep_symbolize_keys)).to eq [{
        id: 1,
        title: 'anime',
        link: 'http://hoge.com'
      }]
    end
  end
end

# frozen_string_literal: true

require 'rails_helper'

RSpec.describe AnimeListHelper, type: :helper do
  describe 'link' do
    context 'If there is link' do
      it 'return link url' do
        content = {
          'TID' => '1',
          'Title' => 'anime',
          'Links' => [['http://hoge.com', 'オフィシャルサイト']]
        }
        expect(link(content)).to eq 'http://hoge.com'
      end
    end

    context 'If there is no link' do
      it 'return nil' do
        content = {
          'TID' => '1',
          'Title' => 'anime',
          'Links' => []
        }
        expect(link(content)).to be_nil
      end
    end
  end
end

# frozen_string_literal: true

require 'rails_helper'
require 'nokogiri'

RSpec.describe AnimeSitePreview, type: :model do
  describe 'image_url' do
    it 'return image url' do
      html_mock = double('html mock', css: 'http://example.com/hoge.png')
      allow(Nokogiri).to receive(:HTML).and_return(html_mock)
      allow_any_instance_of(Kernel).to receive(:open)

      preview = described_class.new('http://example.com')
      expect(preview.image_url).to eq 'http://example.com/hoge.png'
    end
  end
end

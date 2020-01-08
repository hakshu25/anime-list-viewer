# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'AnimeSitePreviews', type: :request do
  describe 'POST api/anime_site_previews' do
    context 'request successful' do
      it do
        allow_any_instance_of(AnimeSitePreview).to receive(:image_url).and_return('http://example.com/logo.png')

        post api_anime_site_previews_path params: { link_url: 'http://example.com' }

        expect(response).to have_http_status(200)
        expect(JSON.parse(response.body)['previewImageUrl']).to eq 'http://example.com/logo.png'
      end
    end

    context 'no request params' do
      it 'throw error' do
        expect { post api_anime_site_previews_path }.to raise_error(ActionController::ParameterMissing)
      end
    end

    context 'bad request params' do
      it 'throw error' do
        expect { post api_anime_site_previews_path, params: { invalid: '' } }.to raise_error(ActionController::ParameterMissing)
      end
    end
  end
end

# frozen_string_literal: true

require 'nokogiri'

class AnimeSitePreview
  def initialize(url)
    @url = url
    @doc = Nokogiri.HTML(open(url))
  end

  def image_url
    @doc.css('//meta[property="og:image"]/@content').to_s
  end
end
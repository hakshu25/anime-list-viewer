# frozen_string_literal: true

module AnimeListHelper
  def link(content)
    content['Links']&.first&.first
  end
end

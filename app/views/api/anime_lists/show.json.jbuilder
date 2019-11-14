# frozen_string_literal: true

json.array! @lists do |list|
  json.id list['TID'].to_i
  json.title list['Title']
  json.link list['Links'].first.first
end

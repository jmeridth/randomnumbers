require 'sinatra'
require 'haml'

get '/' do
  haml :index
end

get '/:min/:max/:count' do |min, max, count|
  count = Integer(count) rescue 10
  min = Integer(min) rescue 1
  max = Integer(max) rescue 100
  @result = count.times.map{ Random.new.rand(min..max) }.join(', ')

  haml :index
end

not_found do
  haml :meh, :layout => :mehlayout
end

error do
  haml :meh, :layout => :mehlayout
end

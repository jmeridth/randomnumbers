require 'sinatra'
require 'haml'

get '/' do
  haml :index
end
get '/min/:min/max/:max/count/:count' do |min, max, count|                                                                          
  defaults = {"count" => 10, "min" => 1, "max" => 100}

  %w(count min max).each do |i|
    default = defaults[i]
    value = eval(i) 
    value = default if value.length > 5
    value = Integer(value) rescue default
    eval "#{i} = #{value}"
  end
  @result = count.times.map{ Random.new.rand(min..max) }.join(', ')
  
  haml :index                                                                                                         
end

not_found do
  haml :meh, :layout => :mehlayout
end

error do
  haml :meh, :layout => :mehlayout
end

require 'sinatra'
require 'haml'

get '/' do
  haml :index
end

post '/calculate' do
  count_default = 10
  min_default = 1
  max_default = 100

  count = (params['count'] || count_default).to_i rescue count_default
  min = (params['min'] || min_default).to_i rescue min_default
  max = (params['max'] || max_default).to_i rescue max_default
 
  count = count == 0 ? count_default : count
  min = min == 0 ? min_default : min
  max = max == 0 ? max_default : max
  @result = count.times.map{ Random.new.rand(min..max) }.join(', ')

  haml :index
end


enable :inline_templates

__END__

@@ layout
%html{ :xmlns => "http://www.w3.org/1999/xhtml", :lang => "en", "xml:lang" => "en"}
  %head
    %title Random Numbers
  %body
    = yield

@@ index
- if @result
  %h1 #{@result}
  %a{:href=>'/'} Get Another Number
- else
  %form{:action => "/calculate",:method => "post"}
    %fieldset
      %ol
        %li
          %label{:for => "min"} Min:
          %input{:type => "text", :name => "min", :class => "text"} (default is 1)
        %li
          %label{:for => "max"} Max:
          %input{:type => "text", :name => "max", :class => "text"} (default is 100)
        %li
          %label{:for => "count"} How many?:
          %input{:type => "text", :name => "count", :class => "text"} (default is 10)
      %input{:type => "submit", :value => "Gimme A Number", :class => "button"}

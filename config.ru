path = File.expand_path "../", __FILE__
require "#{path}/randomnumbers"

run Sinatra::Application

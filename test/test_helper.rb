ENV["RACK_ENV"] = "test"
require File.expand_path('../../randomnumbers.rb', __FILE__)
require 'test/unit'
require 'rack/test'

class Test::Unit::TestCase
  include Rack::Test::Methods
end

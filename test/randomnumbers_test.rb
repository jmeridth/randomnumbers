require File.expand_path('../test_helper.rb', __FILE__)

class RandomNumbersTest < Test::Unit::TestCase

  def app
    Sinatra::Application
  end

  def test_it_lists_the_input_form
    get '/'
    assert last_response.ok?
    assert last_response.body.include?('Min:')
    assert last_response.body.include?('Max:')
    assert last_response.body.include?('How many?:')
    assert last_response.body.include?('Gimme A Number')
  end

  def test_it_throws_error_if_min_is_greater_than_max
    get '/min/101/max/100/count/1'
    assert last_response.ok?
    assert last_response.body.include?('Min value must be less than or equal to Max value')
  end

  def test_it_returns_a_result
    get '/min/1/max/100/count/1'
    assert last_response.ok?
    assert last_response.body.include?('result')
  end
end

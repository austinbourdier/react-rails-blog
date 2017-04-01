class HomeController < ApplicationController
  def index
    render file: 'home/index.html.erb'
  end

  def timestamp
    render json: {timestamp: Time.now.to_i}
  end
end

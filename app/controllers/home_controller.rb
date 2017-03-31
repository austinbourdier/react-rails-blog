class HomeController < ApplicationController
  def index
    render json: {timestamp: Time.now.to_i}
  end

  def timestamp
    render json: {timestamp: Time.now.to_i}
  end
end

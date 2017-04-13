class HomeController < ApplicationController

  def index
    render file: 'home/index.html.erb'
  end

end

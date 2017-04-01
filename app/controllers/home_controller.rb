class HomeController < ApplicationController
  def index
    render file: 'home/index.html.erb'
  end

  def timestamp
    render json: {timestamp: Time.now.to_i}
  end
  
  def posts
    posts = [{id: 1, title: "sup"}, {id: 2, title: "yo"}]
    render json: {posts: posts}
  end
end

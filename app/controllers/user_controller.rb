class UserController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render file: 'home/index.html.erb'
  end

  def find
    user_id = request.path.split('/')[3]
    posts = Post.where(user_id: user_id)
    email = User.find(user_id).email
    user = {
      posts: posts,
      email: email
    }
    render json: {user: user}, status: :ok
  end



end

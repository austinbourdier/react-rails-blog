class PostController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render file: 'home/index.html.erb'
  end

  def create
    postCreated = Post.create({text: params[:value]})
    render json: {postCreated: postCreated}
  end

  def posts
    render json: {posts: Post.all}
  end

  def find
    render json: {post: Post.find(params[:id])}, status: :ok
  end

end

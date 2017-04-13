class PostController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render file: 'home/index.html.erb'
  end

  def create
    @post = Post.new({text: params[:value]})
    if @post.save!
      render json: {postCreated: @post}, status: :ok
    else
      render json: {err: 'bad post creation request'}, status: 400
    end
  end

  def posts
    render json: {posts: Post.all}, status: :ok
  end

  def find
    render json: {post: Post.find(params[:id])}, status: :ok
  end

end

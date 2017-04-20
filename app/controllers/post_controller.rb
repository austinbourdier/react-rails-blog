class PostController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render file: 'home/index.html.erb'
  end

  def create
    @post = Post.new({title: params[:title], body: params[:body], user_id: cookies[:current_user_id]})
    if @post.save!
      render json: {post: @post}, status: :ok
    else
      render json: {err: 'bad post creation request'}, status: 400
    end
  end

  def posts
    render json: {posts: Post.joins(:user).select("users.email as author_email,posts.*").all}, status: :ok
  end

  def find
    @post = Post.joins(:user).select("users.email as author_email,posts.*").find(params[:id])
    if @post
      render json: {post: @post}, status: :ok
    else
      render json: {err: 'post does not exist'}, status: 400
    end
  end

end

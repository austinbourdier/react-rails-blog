class PostController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render file: 'home/index.html.erb'
  end

  def create
    postCreated = Post.create({text: params[:value]})
    render json: {postCreated: postCreated}
  end

  def posts
    puts 'posts'
    puts 'posts'
    puts 'posts'
    puts 'posts'
    puts 'posts'
    render json: {posts: Post.all}
  end

  def find
    puts 'HERE'
    puts 'HERE'
    puts 'HERE'
    puts 'HERE'
    puts params[:id]
    puts 'HERE'
    puts 'HERE'
    puts 'HERE'
    render json: {post: Post.find(params[:id])}, status: :ok

  end
end

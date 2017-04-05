class PostController < ApplicationController
  protect_from_forgery with: :null_session
  def create
    puts 'create'
    puts params[:value]
    postCreated = Post.create({text: params[:value]})
    render json: {postCreated: postCreated}
  end

  def posts
    render json: {posts: Post.all}
  end
end

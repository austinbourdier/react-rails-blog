require 'bcrypt'

class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token

  include BCrypt

  def login
    @user = User.find_by_username(params[:username])
    if @user
      @password_match = Password.new(@user.password_digest) == params[:password]
      if @password_match
        cookies[:current_user_id] = { :value => @user.id, :expires => 1.day.from_now }
        render json: {user: @user}
      else
        render json: {err: 'bad login'}, status: 401
      end
    else
      render json: {err: 'bad login'}, status: 401
    end
  end

  def logout
    cookies.delete :current_user_id
    render json: {msg: 'logged out'}, status: 200
  end

  def register
    @username_exists = User.find_by_username(params[:username])
    if !@username_exists
      @user = User.new(:username => params[:username], :password_digest => Password.create(params[:password]))
      if @user.save!
        cookies[:current_user_id] = { :value => @user.id, :expires => 1.day.from_now }
        render json: {user: @user}
      else
        render json: {err: 'bad register'}, status: 500
      end
    else
      render json: {err: 'username already exists'}, status: 400
    end
  end

end

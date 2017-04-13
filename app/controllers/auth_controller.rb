class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token

  def login
    if(params[:username] == 'austin')
      render json: {user: {name: 'Austin Bourdier', 'email': 'austinbourdier@gmail.com', 'password': '12345'}}, status: :ok
    else
      render json: {err: 'bad login'}, status: 401
    end
  end

  def register
    user = User.new(:username => params[:username], :password => params[:password])
    if user.save!
      cookies[:current_user_id] = { :value => user.id, :expires => 1.day.from_now }
      render json: {user: user}
    else
      render json: {err: 'bad register'}, status: 500
    end
  end

end

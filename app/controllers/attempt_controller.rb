require 'net/http'

class AttemptController < ApplicationController
  skip_before_action :verify_authenticity_token

  def log
    attempt = Attempt.new(
      image_url: params[:image]["image_url"],
      answer: params[:answer],
      tags: params[:image]["tags"],
      user_id: cookies[:current_user_id]
    )
    if attempt.save!
      render json: {attempt: attempt}
    else
      render json: {err: 'bad attempt'}, status: 500
    end
  end



end
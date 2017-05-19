require 'net/http'

class AttemptController < ApplicationController
  skip_before_action :verify_authenticity_token

  def log
    attempt = Attempt.new(
      image_url: params[:image]["imageUrl"],
      answer: params[:answer],
      tags: params[:image]["tags"],
      answer_time: params[:answerTime],
      user_id: cookies[:current_user_id]
    )
    if attempt.save!
      render json: {attempt: attempt}
    else
      render json: {err: 'bad attempt'}, status: 500
    end
  end



end

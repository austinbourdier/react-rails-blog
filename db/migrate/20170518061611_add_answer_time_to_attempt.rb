class AddAnswerTimeToAttempt < ActiveRecord::Migration[5.0]
  def change
    add_column :attempts, :answer_time, :integer
  end
end

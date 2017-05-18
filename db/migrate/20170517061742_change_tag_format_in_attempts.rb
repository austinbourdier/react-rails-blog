class ChangeTagFormatInAttempts < ActiveRecord::Migration[5.0]
  def change
    change_column :attempts, :tag, :string
  end
end

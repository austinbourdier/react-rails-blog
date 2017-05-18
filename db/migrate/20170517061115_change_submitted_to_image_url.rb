class ChangeSubmittedToImageUrl < ActiveRecord::Migration[5.0]
  def change
    rename_column :attempts, :submitted, :image_url
    rename_column :attempts, :correct, :tag
  end
end

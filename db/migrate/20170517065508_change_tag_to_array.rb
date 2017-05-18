class ChangeTagToArray < ActiveRecord::Migration[5.0]
  def change
    rename_column :attempts, :tag, :tags
    change_column :attempts, :tags, "varchar[] USING (string_to_array(tags, ','))"
  end
end

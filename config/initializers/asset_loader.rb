class AssetLoader
  def self.manifest
    return @manifest if defined?(@manifest)

    manifest_path = Rails.application.config.assets.manifest
    if File.exists?(manifest_path)
      @manifest = JSON.parse(File.read(manifest_path))
    end
  end

  def self.get_asset_path(file, directory)
    puts 'file'
    puts file
    puts 'directory'
    puts directory
    root_path = Rails.application.config.assets.root_path
    file_path = nil

    if Rails.env.production? && AssetLoader.manifest
      file_path = AssetLoader.manifest[file]
    else
      file_path = "#{directory}/#{file}"
    end

    puts 'root_path'
    puts root_path
    puts 'file_path'
    puts file_path
    return root_path + file_path
  end
end

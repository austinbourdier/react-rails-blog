Rails.application.routes.draw do
  get 'home/index'
  post 'post/create'
  get 'post/posts'
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: 'home#index'
end

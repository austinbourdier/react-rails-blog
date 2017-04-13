Rails.application.routes.draw do
  get 'home/index'

  get '/auth/login' , to: 'auth#login'
  post '/auth/register' , to: 'auth#register'

  get 'post/posts'
  get 'post/:id', to: 'post#index'
  get 'post/find/:id', to: 'post#find'
  post 'post/create'

  get '*path', to: 'home#index'

  root 'home#index'
end

Rails.application.routes.draw do
  get 'home/index'

  get '/auth/login' , to: 'auth#login'
  get '/auth/logout' , to: 'auth#logout'
  post '/auth/register' , to: 'auth#register'

  get '/user/me' , to: 'user#me'
  get '/user/:id' , to: 'user#index'
  get '/user/find/:id' , to: 'user#find'

  get 'attempt/get', to: 'attempt#get_picture'
  post 'attempt/log', to: 'attempt#log'


  get 'post/posts'
  get 'post/:id', to: 'post#index'
  get 'post/find/:id', to: 'post#find'
  post 'post/create'

  get '*path', to: 'home#index'

  root 'home#index'
end

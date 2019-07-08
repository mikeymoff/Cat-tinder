Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :cats, only: [:index, :update]
    get 'my_cats', to: 'cats#my_cats'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

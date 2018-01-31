class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :login?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.session_token
  end

  def login?
    current_user ? true : false
  end

  def logout
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def require_sign_in

  end
end

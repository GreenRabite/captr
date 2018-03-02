class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def albums
    @albums = current_user.albums
    render :albums
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :fname, :profile_img)
  end
end

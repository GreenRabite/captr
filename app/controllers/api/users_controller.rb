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
    # p "Params are:"
    # p params[:user_id]
    @user = User.find_by(id: params[:user_id])
    if @user
      @albums = @user.albums
      render :albums
    else
      render json: "Could not find user", status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :fname, :profile_img)
  end
end

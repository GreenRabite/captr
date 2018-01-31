class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show, status: 200
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render json: @user
    else
      render json: ["Could not find user"]
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :fname)
  end
end

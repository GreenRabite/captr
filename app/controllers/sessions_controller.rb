class SessionsController < ApplicationController
  # def create
  #   @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
  #   if @user
  #     login(@user)
  #     render json: {"Success"}
  #   else
  #     render json: ["Invalid username/password combination used"], status: 401
  #   end
  # end
  #
  # def destroy
  #   @user = User.find_by(id params[:id])
  #   if @user
  #     logout
  #   render "Success"
  #   else
  #     render json: ["Nobody signed in"], status: 404
  #   end
  # end
end

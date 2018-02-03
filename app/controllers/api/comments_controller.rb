class Api::CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)
    @comment.photo_id = params[:photo_id]
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find_by(id: params[:id])
    if @comment
      if  @comment.update(comment_params)
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end
    else
      render json: ["Could not find user"], status: 404
    end
  end

  def destroy
    @comment = current_user.comments.find_by(id: params[:id])
    if @comment
      @comment.destroy
      render :show
    else
      render json: ["Could not find comment"], status: 422
    end
  end

  def index
    @comments = Comment.where(photo_id: params[:photoId])
    render :index
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :photo_id)
  end
end

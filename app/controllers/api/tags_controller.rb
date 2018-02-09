class Api::TagsController < ApplicationController
  def show
    @tag = Tag.find_by(name: params[:name])

    if @tag
      render :show
  else
      render json: ['Tag does not exist'], status: 404
    end
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end
end

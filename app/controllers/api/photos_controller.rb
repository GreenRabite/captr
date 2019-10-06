class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.owner_id = current_user.id
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def create_album_photo
    @photo = Photo.new(photo_params)
    @photo.owner_id = current_user.id
    @photo.album_id = Album.last.id
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find_by(id: params[:id])
    if @photo
      render :show
    else
      render json: ["Could not find that photo"], status: 404
    end
  end

  def index
    @photos = Photo.includes(:owner).all
    render :index
  end

  def destroy
    @photo = current_user.photos.find_by(id: params[:id])
    if @photo
      @photo.destroy
      render :show
    else
      render json: ["Could not find that photo"], status: 404
    end
  end

  def update
    @photo = current_user.photos.find_by(id: params[:id])
    if @photo
      @photo.update(photo_params)
      render :show
    else
      render json: ["Could not find that photo"], status: 404
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :img_url, :thumb_url, :owner_id, :album_id, :albumTitle, :albumDescription)
  end
end

class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
    render :index
  end

  def show
    @album = Album.find_by(id: params[:id])
    if @album
      render :show
    else
      render json: ["Could not find album"], status: 404
    end
  end

  def create
    @album = Album.new(album_params)
    @album.owner_id = current_user.id
    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = current_user.albums.find_by(id: params[:id])
    if @album
      @album.destroy
      render :show
    else
      render json: ["Could not find that album in your collection"], status: 404
    end
  end

  def update
    @album = current_user.albums.find_by(id: params[:id])
    if @album
      @album.update(album_params)
      render :show
    else
      render json: ["Could not find that album in your collection"], status: 404
    end
  end

  private
  def album_params
    params.require(:album).permit(:title, :description)
  end

end

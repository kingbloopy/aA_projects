class ArtworksController < ApplicationController


    def index 
        if params.has_key?(:artist_id)
            artwork = Artwork.where(artist_id: params[:artist_id])
            render json: artwork
        else
            render json: Artwork.all
        end
        # artworks = Artwork.all 
        # render json: artworks
    end

    def create
        artwork = Artwork.new(artwork_params)
        debugger
        if artwork.save
            render json: artwork
        else 
            render json: artwork.errors.full_messages, status: 422
        end
    end

    def show
        artwork = Artwork.find(params[:id])
        render json: artwork
    end

    def update
        artwork = Artwork.find(params[:id])
        if artwork.update(artwork_params)
            redirect_to "/artworks/#{artwork.id}"
        else
            render json: artwork.errors.full_messages, status: 422
        end

        #double quotes because of interpolation 

    end

    def destroy
        artwork = Artwork.find(params[:id])
        if artwork.destroy 
            render json: 'Why did you kill me :('
        else 
            render json: artwork.errors.full_messages, status: 422
        end
    end
    private

    def artwork_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end
end
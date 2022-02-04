class UsersController < ApplicationController
    def index 
        user = User.find(params[:username])
        if !user.nil?
            render json: user
        else
            users = User.all
            render json: users
        end
    end

    def create 
        user = User.new(user_params)
        if user.save
            render json: user
        else 
            render json: user.errors.full_messages, status: 422

        end 
        
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        if  user.update(user_params)
            redirect_to "/users/#{user.id}"
        else
            render json: user.errors.full_messages, status: 422

        end
    end

    # .where(author_id: params[:user_id])
    def destroy
        user = User.find(params[:id])
        # artworks = Artwork.where(artist_id: params[:id])
        # art_shares = ArtworkShare.where(viewer_id: params[:id])

        if user.destroy
            # artworks.destroy
            # art_shares.destroy
            render json: 'U got fuckin destroyed'
        else
            render json: user.errors.full_messages, status: 422
        end
    end
    #params[:id]

    private 

    def user_params
        params.require(:user).permit(:username)
    end
end

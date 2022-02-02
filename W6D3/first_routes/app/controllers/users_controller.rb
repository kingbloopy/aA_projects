class UsersController < ApplicationController
    def index 
        #users = User.all
        render plain: 'will this come up?' #json: users
    end

    def create 
        render json: params
    end



    #params[:id]

    private 

end

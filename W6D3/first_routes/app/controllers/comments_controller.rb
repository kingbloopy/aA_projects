class CommentsController < ApplicationController
  def index
    if params[:artwork_id]
    comment = Comment.where(artwork_id: params[:artwork_id])
    else
    comment = Comment.where(user_id: params[:user_id])
    end
    render json: comment
  end

  # def com_index
  #   comment = Comment.where(user_id: params[:user_id])
  #   render json: comment
  # end

  def create
    comment = Comment.new(com_params)
    if comment.save
      render json: comment
    else
      render json: 'Bad comment bro, maybe next time...'
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    if comment.destroy
      render json: 'What an antiquated comment'
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  private
  def com_params
    params.require(:comment).permit(:body, :user_id, :artwork_id)
  end
  
end

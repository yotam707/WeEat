module Api
  class ReviewsController < ApplicationController
    before_action :set_reviews, only: [ :show, :edit, :update, :destroy]
    before_action :set_resturant, only: [:index, :create, :show, :edit, :update, :destory]
    
    def index
      @reviews = @resturant.reviews
      render json: @reviews, status: :ok
    end

    def new
      @review = @resturant.reviews.new
    end
    

    def create
      @review = @resturant.reviews.create(review_params)
        if @review.save
            render json: @review, status: :created
        else
            render json: @reviwe.errors
        end
    end

    def update
        if @review.update(review_params)
          render json: @review, status: :ok
        else
          render json: @review.errors
        end
    end

    def destory
      @review.destroy
      head :no_content
    end

    private
    
    def set_reviews
        @review = Review.find(params[:id])
    end
    
    def set_resturant
        @resturant = Resturant.find(params['resturant_id'])
    end

    def review_params
      params.require(:review).permit(:reviewer_name, :rating, :comment)
    end

  end
end
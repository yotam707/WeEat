
module Api
  class ReviewsController < ApplicationController
    before_action :set_review, only: %i[show edit update destroy]
    before_action :set_returant, only: %i[show edit update destory]
    
    def index
      @reviews = @resturant.reviews
    end

    def new
      @review = @resturant.reviews.new
    end
    

    def create
      @review = @resturant.reviews.create(review_params)

      respond_to do |format|
          if @reviwe.save
              format.json { render :show, status: :created, location: [@resturant, @review] }
          else
              format.json { render json: @revie.error }
          end
      end
    end

    def update
      respond_to do |format|
          if @review.update(review_params)
            format.json { render :show, status: :ok, location: [@resturant, @review] }
          else
            format.json { render json: @review.errors }
          end
        end
    end

    def destory
      @review.destroy

      respond_to do |format|
          format.json { head :no_content }
      end
    end

    private
    
    def set_reviews
        @review = Review.find(params[:id])
    end
    
    def set_resturant
        @resturant = Resturant.find(params[:id])
    end

    def review_params
      params.require(:review).permit(:reviewer_name, :rating, :comment)
    end

  end
end
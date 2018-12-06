module Api
    class ResturantsController < ApplicationController
        before_action :set_resturant, only: [:show, :edit, :update, :destroy]

        def index
            @resturants = Resturant.eager_load(:reviews)
            .search(params[:search])
            .all
            render json: @resturants, status: :ok, include: :reviews
        end

        def show
        end

        def new
            @resturant = Resturant.new
        end

        def create
            @resturant = Resturant.new(resturant_params)
            if @resturant.save
                render json: @resturant, status: :created
            else
                render json: @resturant.errors
            end
        end

        def update
                if @resturant.update(resturant_params)
                    render json: @resturant, status: :ok
                else
                    render json: @resturant.errors 
                end
        end

        def destroy
            @resturant.destory
            head :no_content
        end

        private

        def set_resturant
            @resturant = Resturant.find(params[:id])
        end

        def resturant_params
            params.require(:resturant).permit(:name, :cuisine, :tenbis, :address, :max_delivery_time)
        end  

    end
end
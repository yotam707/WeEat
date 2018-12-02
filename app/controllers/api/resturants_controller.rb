module Api
    class ResturantsController < ApplicationController
        before_action :set_returant, only: [:show, :edit, :update, :destroy]

        def index
            @resturants = Resturant.includes(:reviews)
        end

        def show
        end

        def new
            @resturant = Resturant.new
        end

        def create
            @resturant = Resturant.new(resturant_params)
            respond_to do |format|
                if @resturant.save
                format.html { redirect_to @resturant }
                format.json { render :show, status: :created, location: @resturant }
                else
                format.html { render :new }
                format.json { render json: @resturant.errors }
                end
            end
        end

        def update
            respond_to do |format|
                if @resturant.update(resturant_params)
                    format.html { redirect_to @resturant }
                    format.json { render :show, status: :ok, location: @resturant }
                else
                    format.html { render :edit}
                    format.json { render json: @resturant.errors }
                end
            end
        end

        def destroy
            @resturant.destory
            respond_to do |format|
                format.html{ redirect_to @resturant }
                format.json{ head :no_content }
            end
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
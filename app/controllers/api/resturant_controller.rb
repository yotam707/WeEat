class Api::ResturantController < ApplicationController
    def show
        @resturant = Resturant.find(params[:id])
      end
end
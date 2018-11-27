 class HomeController < ApplicationController
    def index
        @first_resturant_id = Resturant.first.id
    end
 end
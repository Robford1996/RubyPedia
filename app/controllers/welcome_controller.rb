class WelcomeController < ApplicationController
    def index
        render json: { status: 200, message: "Profiles API" }
      end
end

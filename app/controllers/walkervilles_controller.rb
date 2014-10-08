require 'open-uri'

class WalkervillesController < ApplicationController

	def index
		schedule = Schedule.new
		@tour_dates = schedule.tour_dates
    
    # binding.pry
	end

  def download
    url = 'https://s3.amazonaws.com/walkervilles/Tour_Poster.jpg'
    data = open(url).read
    send_data data, :disposition => 'attachment', :filename=>"photo.jpg"
  end
end

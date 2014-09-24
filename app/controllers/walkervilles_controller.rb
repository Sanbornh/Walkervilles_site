class WalkervillesController < ApplicationController

	def index
		schedule = Schedule.new
		@tour_dates = schedule.tour_dates
    # binding.pry
    puts browser.chrome?
    puts browser.mobile?
	end
end

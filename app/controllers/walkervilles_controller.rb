class WalkervillesController < ApplicationController

	def index
		schedule = Schedule.new
		@tour_dates = schedule.tour_dates
    # binding.pry
    puts "chrome = " + browser.chrome?.to_s
    puts "mobile = " + browser.mobile?.to_s
    puts "safari = " + browser.safari?.to_s
    puts "firefox = " + browser.firefox?.to_s

	end
end

class Schedule
	
	def tour_dates
		request_from_bandsintown
		return JSON.parse(@res.body)
	end

	def request_from_bandsintown
		url = URI.parse('http://api.bandsintown.com/artists/TheWalkervilles/events.json?api_version=2.0&app_id=YOUR_APP_ID')
		req = Net::HTTP::Get.new(url.path)
		@res = Net::HTTP.start(url.host, url.port) {|http|
		  http.request(req)
		}
	end

end

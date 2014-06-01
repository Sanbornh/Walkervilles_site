skrollr.init({
	forceHeight: false,
	smoothScrolling: true,
	smoothScrollingDuration: 10,
	edgeStrategy: 'ease'
});

$( window ).resize(function() {

	if(Modernizr.mq('screen and (max-width: 680px)')) {

		console.log("Below 680 " + Modernizr.mq('screen and (max-width: 800px)'))
		var s = skrollr.init();
		s.destroy();

	} else {

		console.log("Above 680 " + Modernizr.mq('screen and (max-width: 800px)'))
		skrollr.init({
			forceHeight: false,
			smoothScrolling: true,
			smoothScrollingDuration: 10,
			edgeStrategy: 'ease'
		});
	}
});

$( document ).ready(function() {

	// Handles hover functions on album artwork
	$('.album-wrapper').mouseenter(function() {
		$('#cover').attr('src', $('#cover').data('src'));
	});

	$('.album-wrapper').mouseleave(function() {
		$('#cover').attr('src', $('#cover').data('src-colour'));
	});

	// Handles navbar links to anchors
	$('.nav-button').click(function() {
		$.scrollTo($('.content:nth-child(2)'), {duration: 600});
	});

	// Back top top button fade in when window top is past 200
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('.arrow-wrapper').fadeIn('slow');
		}

		if($(this).scrollTop() < 200) {
			$('.arrow-wrapper').fadeOut('slow');
		}
	});

	// Handles back-to-top functionality
	$('.arrow-wrapper').click(function() {
		$.scrollTo($('.window:nth-child(1)'), {duration: 600});
	});

});
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
		$('#cover').attr('src', $('#cover').data('src'))
	});

	$('.album-wrapper').mouseleave(function() {
		$('#cover').attr('src', $('#cover').data('src-colour'))
	});

	$('.nav-button').click(function() {
		$.scrollTo($('.content:nth-child(2)'), {duration: 600});
	});

});
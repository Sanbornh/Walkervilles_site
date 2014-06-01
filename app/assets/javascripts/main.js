skrollr.init({
	forceHeight: false
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
			smoothScrollingDuration: 100,
			edgeStrategy: 'ease'
		});
	}
});

$( document ).ready(function() {
	$('.album-wrapper').mouseenter(function() {
		console.log('here')
		$('#cover').attr('src', $('#cover').data('src'))
	});

	$('.album-wrapper').mouseleave(function() {
		$('#cover').attr('src', $('#cover').data('src-colour'))
	});
});
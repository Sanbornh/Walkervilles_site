function initiliazeSkrollr() {
	skrollr.init({
		forceHeight: false,
		smoothScrolling: true,
		smoothScrollingDuration: 10,
		edgeStrategy: 'ease'
	});
}

function killSkrollr() {
	var s = skrollr.init();
	s.destroy();
}

function toggleSkrollr() {
	if(Modernizr.mq('screen and (max-width: 680px)')) {
		killSkrollr();
	} else {
		initiliazeSkrollr();
	}
}

function scrollOnClick(button, target) {
	$(button).click(function() {
		$.scrollTo($(target), {duration: 600});
	});
}

// Check on initial load whether to turn parallax ON or OFF
toggleSkrollr();

// Check on resize whether to turn parallax ON or OFF
$( window ).resize(function() {
	toggleSkrollr();
});

$( document ).ready(function() {

	// Handles hover functions on album artwork
	$('.album-wrapper').mouseenter(function() {
		$('#cover').attr('src', $('#cover').data('src'));
	});

	$('.album-wrapper').mouseleave(function() {
		$('#cover').attr('src', $('#cover').data('src-colour'));
	});

	// On-page navigation
	scrollOnClick('.go-to-music', '.content:nth-child(2)');  // Click 'Music' scroll to youtube video
	scrollOnClick('.go-to-dates', '.content:nth-child(4)');  // Click 'Tour Dates', scroll to list of tour dates
	scrollOnClick('.arrow-wrapper', '.window:nth-child(1)'); // Click back to top arrow and scroll to top

	// Back to top button fade in when window top is past 200
	// and fade out when window is back at the top
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('.arrow-wrapper').fadeIn('slow');
		} else {
			$('.arrow-wrapper').fadeOut('slow');
		}
	});

	// Controls expansion and contraction animations for navbar
	var extended = false
	var numButtons = $('.nav-button').length;

	$('.button').click(function() {
		if(!extended) {
			for(var i = 0; i < numButtons; i++) {
				var offset = i * 40;
	      $($('.nav-button')[i]).animate({top: offset + 'px'}, {duration: 200});   

	      $('.nav-arrow').addClass('nav-arrow-up');
	      extended = true;
	    }
	  } else {
	  	for(var i = 0; i < numButtons; i++) {
				var offset = 0;
	      $($('.nav-button')[i]).animate({top: offset + 'px'}, {duration: 200});   

	      $('.nav-arrow').removeClass('nav-arrow-up');
	      extended = false;
	    }
	  }
  });
});
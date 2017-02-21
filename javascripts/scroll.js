$(function() {
	$('p.scrolldown').click(function() {
		$('.main').css({"margin-top": "-100vh", "transition": "all 1s ease"});
	});

	$('.btns p:first-of-type').click(function() {
		$('.main').css({"margin-top": "0vh", "transition": "all 1s ease"});
	});

	$('.btns p:last-of-type').click(function() {
		$('.main').css({"margin-top": "-200vh", "transition": "all 1s ease"});
	});

	$('.btns2 p:first-of-type').click(function() {
		$('.main').css({"margin-top": "-100vh", "transition": "all 1s ease"});
	});

	$('.btns2 p:last-of-type').click(function() {
		$('.main').css({"margin-top": "0vh", "transition": "all 1s ease"});
	});
});

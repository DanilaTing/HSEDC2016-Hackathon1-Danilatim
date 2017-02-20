$(function() {
	$('p.scrolldown').click(function() {
		$('.main').css({"margin-top": "-100vh", "transition": "all 1s ease"});
	});

	$('.btns p:first-of-type').click(function() {
		$('.main').css({"margin-top": "0vh", "transition": "all 1s ease"});
	});
});

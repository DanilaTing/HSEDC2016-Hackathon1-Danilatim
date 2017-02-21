$(function() {
  $('#white').click(function() {
		$('#white').css('animation', 'none');
	});


  $('.cls-1').click(function(){
    $('.invisible').css('opacity', '1');
    $('#white').css({'width': '90vw', 'height': '90vh', 'margin-top': '30px', 'transition': 'all 2s ease'})
  });

});

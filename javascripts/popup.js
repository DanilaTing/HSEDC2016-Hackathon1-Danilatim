$(function() {

  $('.main .top p .about').click(function () {
    $('.aboutPopup').css('visibility', 'visible');
  })

  $('p.cross').click(function () {
    $('.aboutPopup').css('visibility', 'hidden')
  })
});

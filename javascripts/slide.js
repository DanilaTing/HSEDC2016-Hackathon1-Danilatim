$(function () {
  $('.display2, .display3, .display4, .display5').css({"opacity": "0"});

  $('.right').one("click", function () {
    $('.carousel1').css({"margin-left": "-=580px", "transition": "all 0s ease"});
    $('.display1, .display3, .display4, .display5').css({"opacity": "0"});
    $('.display2').css({"opacity": "1"});
  });

  $('.right').one("click", function () {
    $('.carousel1').css({"margin-left": "-=580px", "transition": "all 0s ease"});
    $('.display2, .display3, .display4, .display5').css({"opacity": "0"});
    $('.display3').css({"opacity": "1"});
  });

});

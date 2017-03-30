$(function () {
  $('.second, .third, .fourth, .fifth').css("display", "none");

  $('.first .fa-chevron-right').click(function() {
    $('.first, .third, .fourth, .fifth').css("display", "none");
    $('.second').css("display", "block");
  });

  $('.second .fa-chevron-left').click(function() {
    $('.second, .third, .fourth, .fifth').css("display", "none");
    $('.first').css("display", "block");
  });
  $('.second .fa-chevron-right').click(function() {
    $('.first, .second, .fourth, .fifth').css("display", "none");
    $('.third').css("display", "block");
  });

  $('.third .fa-chevron-left').click(function() {
    $('.first, .third, .fourth, .fifth').css("display", "none");
    $('.second').css("display", "block");
  });
  $('.third .fa-chevron-right').click(function() {
    $('.first, .second, .third, .fifth').css("display", "none");
    $('.fourth').css("display", "block");
  });

  $('.fourth .fa-chevron-left').click(function() {
    $('.first, .second, .fourth, .fifth').css("display", "none");
    $('.third').css("display", "block");
  });
  $('.fourth .fa-chevron-right').click(function() {
    $('.first, .second, .third, .fourth').css("display", "none");
    $('.fifth').css("display", "block");
    $('.fifth .right').css("opacity", "0");
  });

  $('.fifth .fa-chevron-left').click(function() {
    $('.first, .second, .third, .fifth').css("display", "none");
    $('.fourth').css("display", "block");
  });

  $('.lowFirst .right').click(function() {
    $('.lowFirst').css("opacity", "0");
    $('.lowSecond').css("opacity", "1");
    $('.lowSecond .left').css("opacity", "1");
    $('.lowSecond .right').css("opacity", "0");
  });
  $('.lowSecond .left').click(function() {
    $('.lowSecond').css("opacity", "0");
    $('.lowFirst').css("opacity", "1");
    $('.lowFirst .left').css("opacity", "0");
    $('.lowFirst .right').css("opacity", "1");
  });

  $('.footer a').mouseenter(function() {
    $('.footer a').css({'color': 'white'});
    $('.top, .plans, .lower').css('display', 'none');
    $('.background, .wrapper').css({'background': 'black', 'width': '100vw'});
    $('.cls-1').css('stroke', 'white');
    $('html, body').animate({
        scrollTop: $(".wrapper").offset().top
    }, 2000);
  });

  $('.one').mouseenter(function() {
    $('.plans').css({'opacity': '1', 'transition': 'all .8s ease'});
  });

  $('.two').mouseenter(function() {
    $('.lower').css({'opacity': '1', 'transition': 'all .8s ease'});
  });
});

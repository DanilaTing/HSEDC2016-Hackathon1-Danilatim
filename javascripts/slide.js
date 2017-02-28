$(function () {
  $('.second, .third, .fourth, .fifth').css("display", "none");
  $('.first .left').css("opacity", "0");

  $('.first .right').click(function() {
    $('.first, .third, .fourth, .fifth').css("display", "none");
    $('.second').css("display", "block");
  });

  $('.second .left').click(function() {
    $('.second, .third, .fourth, .fifth').css("display", "none");
    $('.first').css("display", "block");
  });
  $('.second .right').click(function() {
    $('.first, .second, .fourth, .fifth').css("display", "none");
    $('.third').css("display", "block");
  });

  $('.third .left').click(function() {
    $('.first, .third, .fourth, .fifth').css("display", "none");
    $('.second').css("display", "block");
  });
  $('.third .right').click(function() {
    $('.first, .second, .third, .fifth').css("display", "none");
    $('.fourth').css("display", "block");
  });

  $('.fourth .left').click(function() {
    $('.first, .second, .fourth, .fifth').css("display", "none");
    $('.third').css("display", "block");
  });
  $('.fourth .right').click(function() {
    $('.first, .second, .third, .fourth').css("display", "none");
    $('.fifth').css("display", "block");
    $('.fifth .right').css("opacity", "0");
  });

  $('.fifth .left').click(function() {
    $('.first, .second, .third, .fifth').css("display", "none");
    $('.fourth').css("display", "block");
  });
});

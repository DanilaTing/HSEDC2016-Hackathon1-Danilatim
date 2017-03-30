$(function () {
  $('.second, .third, .fourth, .fifth').css("display", "none");

  $('.first .fa-chevron-right').click(function() {
    $('.first, .third, .fourth, .fifth').css("display", "none");
    $('.second').css("display", "flex");
  });

  $('.second .fa-chevron-left').click(function() {
    $('.second, .third, .fourth, .fifth').css("display", "none");
    $('.first').css("display", "flex");
  });
  $('.second .fa-chevron-right').click(function() {
    $('.first, .second, .fourth, .fifth').css("display", "none");
    $('.third').css("display", "flex");
  });

  $('.third .fa-chevron-left').click(function() {
    $('.first, .third, .fourth, .fifth').css("display", "none");
    $('.second').css("display", "flex");
  });
  $('.third .fa-chevron-right').click(function() {
    $('.first, .second, .third, .fifth').css("display", "none");
    $('.fourth').css("display", "flex");
  });

  $('.fourth .fa-chevron-left').click(function() {
    $('.first, .second, .fourth, .fifth').css("display", "none");
    $('.third').css("display", "flex");
  });
  $('.fourth .fa-chevron-right').click(function() {
    $('.first, .second, .third, .fourth').css("display", "none");
    $('.fifth').css("display", "flex");
  });

  $('.fifth .fa-chevron-left').click(function() {
    $('.first, .second, .third, .fifth').css("display", "none");
    $('.fourth').css("display", "flex");
  });

});

$(function () {
  $('.second, .third, .fourth, .fifth').css("display", "none");

  $('.top_plans.first .fa-chevron-right').click(function() {
    $('.top_plans.first, .top_plans.third, .top_plans.fourth, .top_plans.fifth').css("display", "none");
    $('.top_plans.second').css("display", "flex");
  });

  $('.top_plans.second .fa-chevron-left').click(function() {
    $('.top_plans.second, .top_plans.third, .top_plans.fourth, .top_plans.fifth').css("display", "none");
    $('.top_plans.first').css("display", "flex");
  });
  $('.top_plans.second .fa-chevron-right').click(function() {
    $('.top_plans.first, .top_plans.second, .top_plans.fourth, .top_plans.fifth').css("display", "none");
    $('.top_plans.third').css("display", "flex");
  });

  $('.top_plans.third .fa-chevron-left').click(function() {
    $('.top_plans.first, .top_plans.third, .top_plans.fourth, .top_plans.fifth').css("display", "none");
    $('.top_plans.second').css("display", "flex");
  });
  $('.top_plans.third .fa-chevron-right').click(function() {
    $('.top_plans.first, .top_plans.second, .top_plans.third, .top_plans.fifth').css("display", "none");
    $('.top_plans.fourth').css("display", "flex");
  });

  $('.top_plans.fourth .fa-chevron-left').click(function() {
    $('.top_plans.first, .top_plans.second, .top_plans.fourth, .top_plans.fifth').css("display", "none");
    $('.top_plans.third').css("display", "flex");
  });
  $('.top_plans.fourth .fa-chevron-right').click(function() {
    $('.top_plans.first, .top_plans.second, .top_plans.third, .top_plans.fourth').css("display", "none");
    $('.top_plans.fifth').css("display", "flex");
  });

  $('.top_plans.fifth .fa-chevron-left').click(function() {
    $('.top_plans.first, .second, .third, .fifth').css("display", "none");
    $('.top_plans.fourth').css("display", "flex");
  });

  $('.low_plans .first .fa-chevron-right').click(function() {
    $('.low_plans .first, .low_plans .third, .low_plans .fourth, .low_plans .fifth').css("display", "none");
    $('.low_plans .second').css("display", "flex");
  });

  $('.low_plans .second .fa-chevron-left').click(function() {
    $('.low_plans .second, .low_plans .third, .low_plans .fourth, .low_plans .fifth').css("display", "none");
    $('.low_plans .first').css("display", "flex");
  });
  $('.low_plans .second .fa-chevron-right').click(function() {
    $('.low_plans .first, .low_plans .second, .low_plans .fourth, .low_plans .fifth').css("display", "none");
    $('.low_plans .third').css("display", "flex");
  });

  $('.low_plans .third .fa-chevron-left').click(function() {
    $('.low_plans .first, .low_plans .third, .low_plans .fourth, .low_plans .fifth').css("display", "none");
    $('.low_plans .second').css("display", "flex");
  });

});

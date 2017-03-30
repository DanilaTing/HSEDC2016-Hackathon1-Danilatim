$(function () {
  $(".main").onepage_scroll({
     sectionContainer: "section",
     easing: "ease",

     animationTime: 1000,
     pagination: false,
     updateURL: false,
     beforeMove: function(index) {},
     afterMove: function(index) {},
     loop: false,
     keyboard: true,
     responsiveFallback: false,


     direction: "vertical"
  });

  $('#reception').click(function() {
    $("#plan1").get(0).scrollIntoView();
  });

  $('#tests').click(function() {
    $("#plan1").get(0).scrollIntoView();
    $('.top_plans.first, .top_plans.third, .top_plans.fourth, .top_plans.fifth').css("display", "none");
    $('.top_plans.second').css("display", "flex");
  });

  $('#sun').click(function() {
    $("#plan1").get(0).scrollIntoView();
    $('.top_plans.first, .top_plans.third, .top_plans.fourth, .top_plans.fifth').css("display", "none");
    $('.top_plans.second').css("display", "flex");
  });
  $('#cloud').click(function() {
    $("#plan1").get(0).scrollIntoView();
    $('.top_plans.first, .top_plans.second, .top_plans.fourth, .top_plans.fifth').css("display", "none");
    $('.top_plans.third').css("display", "flex");
  });
  $('#rain').click(function() {
    $("#plan1").get(0).scrollIntoView();
    $('.top_plans.first, .top_plans.second, .top_plans.third, .top_plans.fifth').css("display", "none");
    $('.top_plans.fourth').css("display", "flex");
  });
  $('#storm').click(function() {
    $("#plan1").get(0).scrollIntoView();
    $('.top_plans.first, .top_plans.third, .top_plans.fourth, .top_plans.fifth').css("display", "none");
    $('.top_plans.second').css("display", "flex");
  });

  $('#low').click(function() {
    $(".low_plans").get(0).scrollIntoView();
  });

});

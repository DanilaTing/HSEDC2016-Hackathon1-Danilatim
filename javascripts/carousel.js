$(function(){
  $('.carousel1').slick({
    dots: false,
    arrows: true,
    prevArrow: '<div style="position: absolute; width: 40px; height: 40px; border-right: 10px solid black; border-top: 10px solid black; z-index: 500; cursor: pointer; transform: rotate(-135deg); margin: 150px 0 0 -70px;"></div>',
    nextArrow: '<<div style="position: absolute; width: 40px; height: 40px; border-right: 10px solid black; border-top: 10px solid black; z-index: 500; cursor: pointer; transform: rotate(45deg); margin: 135px 0 0 30px;"></div>',
    infinite: true,
    speed: 700
  });
});

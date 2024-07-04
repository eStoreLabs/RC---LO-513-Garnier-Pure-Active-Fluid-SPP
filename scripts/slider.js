// require(['jquery', 'slick'], function ($) {
$(document).ready(function () {
  $('.es-slick-carousel').slick({
    dots: true,
    infinite: true,
    prevArrow: '.slick-button-prev',
    nextArrow: '.slick-button-next',
    appendDots: '.slick-pagination',
  });
});
// });

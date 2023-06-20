$('.single-item').slick({
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>'
});

$('.slick-vertical').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 3,

  prevArrow: '<div class="slick-prev2"></div>',
  nextArrow: '<div class="slick-next2"></div>'
});

$('.car-color-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  dotsClass: 'car-color-slick-dots',
});

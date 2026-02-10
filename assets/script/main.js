var hamburger = $('.hamburger-menu');
$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-active');
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-active');
});


$(function () {
  $('.js-gallery-slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    fade: true
  });
});


$('.faq__question').on('click', function () {
  const $item = $(this).closest('.faq__item');
  const $icon = $(this).find('.toggle-icon');
  $item.toggleClass('active');
  $icon.toggleClass('bi bi-plus bi bi-dash-lg');
});



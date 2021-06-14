import Swiper from 'swiper';

let childSlider = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: false,
  loop: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    560: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
  }
});




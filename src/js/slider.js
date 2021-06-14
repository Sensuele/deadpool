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
    992: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
      loop: true,
      // Navigation arrows
    
    },
    720: {
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
    },

  }
});




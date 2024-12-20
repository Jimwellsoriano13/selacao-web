let swiper = new Swiper('.card-content', {
  loop: true,
  spaceBetween: 32,
  grabCursor:true,
  
  autoplay:{
    delay: 6000,
    disableOnInteraction: false,

  },

  speed:1000,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968:{
      slidesPerView: 3,
    }
  },

});

let swiperSecond = new Swiper('.swiper-container', {
  loop: true,
  speed:1000,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
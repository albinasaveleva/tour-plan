var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider__button_next',
      prevEl: '.slider__button_prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  })
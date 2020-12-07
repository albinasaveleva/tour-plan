$(document).ready(function() {
  var hotelSlider = new Swiper('.hotel__swiper-container', {

    loop: true,
        navigation: {
        nextEl: '.hotel__swiper-button-next',
        prevEl: '.hotel__swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    })
  var reviewSlider = new Swiper('.review__swiper-container', {
  
    loop: true,
      navigation: {
      nextEl: '.review__swiper-button-next',
      prevEl: '.review__swiper-button-prev',
    },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
  })
    
  ymaps.ready(init);
  
  function init(){
        var myMap = new ymaps.Map("map", {
            center: [41.01003, 28.97968],
            zoom: 7
        },
        {
          autoFitToViewport: 'always',
          searchControlProvider: 'yandex#search'
      });
        myGeoObject = new ymaps.GeoObject({
          geometry: {
              type: "Point",
              coordinates: [41.01003, 28.97968]
          }    
        });
        myMap.geoObjects
          .add(myGeoObject)
          .add(new ymaps.Placemark([41.01003, 28.97968], {
            iconColor: '#0095b6'
          }));
  }
  
  const mobileMenuButton = document.querySelector('.burger-menu');
  const mainPage = document.querySelector('body');
  
  mobileMenuButton.addEventListener('click', function() {
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom_mobile');
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom_hidden');
    document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom_scroll');
    document.querySelector('.user-mobile').classList.toggle('user-mobile_visible');
    document.querySelector('.form-mobile').classList.toggle('form-mobile_visible');
    mainPage.classList.toggle('body_scrollless');
  })

  const modalOpen = $("[data-toggle=modal-open]");
  const modalClose = $("[data-toggle=modal-close]");
  const modal = $('.modal');
  const modalDialog = $('.modal-dialog');
  const body = $('body');

  modalOpen.on('click', function() {
    modal.addClass('modal_visibility');
    modalDialog.addClass('modal-dialog_visibility');
    body.addClass('body_scrollless');
    modalDialog.addClass('modal-dialog_scroll');
  });
  modalClose.on('click', function() {
    modal.removeClass('modal_visibility');
    modalDialog.removeClass('modal-dialog_visibility');
    body.removeClass('body_scrollless');
    modalDialog.removeClass('modal-dialog_scroll');
  });
  
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      modal.removeClass('modal_visibility');
      modalDialog.removeClass('modal-dialog_visibility');
      body.removeClass('body_scrollless');
      modalDialog.removeClass('modal-dialog_scroll');
    }
});
});
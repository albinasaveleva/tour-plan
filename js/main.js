$(document).ready(function() {
//Анимация
AOS.init();

//Слайдер  
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
//Яндекс карта    
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

//Мобильное меню
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
//Модальное окно
  const modalOpen = $("[data-toggle=modal-open]");
  const modalClose = $("[data-toggle=modal-close]");
  const modal = $('.modal');
  const modalDialog = $('.modal-dialog');
  const body = $('body');

  const modalForm = $('');
  const subscriptionForm = $('');

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
//Валидация форм
  $('.phone-number').mask('+7 (999) 999-99-99');

  $('.newsletter__form').validate({ 
    messages: {
        email_subscription: {
          email: "Your email address must be in the format of name@domain.com"
        },
      },
    });
  
  $('.message__form').validate({ 
    rules: {
        name_message: {
          required: true,
          minlength: 2
        },
        phone_message: {
          required: true,
          minlength: 18
        }
      },
      messages: {
        name_message: {
          required: "Please specify your name",
          minlength: "Your name must contain at least 2 characters"
        },
        phone_message: {
          required: "Please specify your phone number",
          minlength: "Your phone number must be in the format of +7 (999) 999-99-99"
        },
      }
    });

 
  $('.modal__form').validate({ 
    rules: {
        name_booking: {
          required: true,
          minlength: 2
        },
        phone_booking: {
          required: true,
          minlength: 18
        },
        phone_booking: {
          required: true,
        }
      },
      messages: {
        name_booking: {
          required: "Please specify your name",
          minlength: "Your name must contain at least 2 characters"
        },
        phone_booking: {
          required: "Please specify your phone number",
          minlength: "Your phone number must be in the format of +7 (999) 999-99-99"
        },
        email_booking: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        }
      },
    });

});
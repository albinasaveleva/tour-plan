$(document).ready(function() {
//Анимация
AOS.init();


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

//Валидация форм
  $('.phone-number').mask('+7 (999) 999-99-99');



  $('.newsletter__form').validate({ 
    rules: {
      email_subscription: {
        email: true
      }
    },
    messages: {
      email_subscription: {
          email: "Your email address must be in the format of name@domain.com"
        }
      }
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
        email_booking: {
          required: true,
          email: true
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
          email: "Your email address must be in the format of name@domain.com",
        }
      },
    });  

});
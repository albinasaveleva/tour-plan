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
